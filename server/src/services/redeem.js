const axios = require('axios');
const user = require('../services/user');
const { api } = require('../core/parameters');
const { REDEEM, USER } = require('../core/constants');

async function setRedeem(token, userId, data) {
  const userData = await user.getUser(token, userId);

  if (!canUserRedeem(userData)) return Promise.reject();

  const body = {
    fieldData: {
      status: data.type === REDEEM.TYPE.FULL ? USER.STATUS.CANCELED : userData.fieldData.status,
      portabilityValue: userData.fieldData.portabilityValue - data.portabilityValue,
      additionalValue: userData.fieldData.additionalValue - data.additionalValue,
      value: userData.fieldData.value - data.value,
    },
  };

  return axios
    .patch(api.concat(`/layouts/stock/records/${userId}`), body, { headers: { 'Authorization': "bearer " + token } })
    .then(response => response.data.response.data);
}

function canUserRedeem(user) {
  const date = new Date();
  const createdDate = new Date(user.fieldData.createdAt);
  const isAnApprovedStatus = REDEEM.APPROVED_STATUS.find(approvedStatus => approvedStatus === user.fieldData.status);
  const months = (date.getFullYear() - createdDate.getFullYear()) * 12 + (date.getMonth() - createdDate.getMonth());
  return isAnApprovedStatus && months >= REDEEM.MINIMUM_MONTH_TO_REDEEM;
}

module.exports = { setRedeem };