const date = require('../services/date');
const { REDEEM, USER } = require('../core/constants');

function getPartialRedeemBody(user, data) {
  return {
    fieldData: {
      portabilityValue: user.fieldData.portabilityValue - data.portabilityValue,
      additionalValue: user.fieldData.additionalValue - data.additionalValue,
      value: user.fieldData.value - data.value,
    },
  };
}

function getFullRedeemBody() {
  return {
    fieldData: {
      status: USER.STATUS.CANCELED,
      portabilityValue: 0,
      additionalValue: 0,
      value: 0,
    },
  };
}

function getRedeem(user, data) {
  return data.type === REDEEM.TYPE.FULL
    ? getFullRedeemBody()
    : getPartialRedeemBody(user, data);
}

function canUserRedeem(user) {
  const isAnApprovedStatus = REDEEM.APPROVED_STATUS.find(approvedStatus => approvedStatus === user.fieldData.status);
  const months = date.monthDiff(new Date(), new Date(user.fieldData.createdAt));
  return isAnApprovedStatus && months >= REDEEM.MINIMUM_MONTH_TO_REDEEM;
}

module.exports = { getRedeem, canUserRedeem };