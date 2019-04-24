const { CONTRIBUTE, REDEEM } = require('../core/constants');

function getContribute(user, data) {
  switch (data.type) {
    case CONTRIBUTE.TYPE.NORMAL:
      return { fieldData: { value: user.fieldData.value + data.value } };
    case CONTRIBUTE.TYPE.ADDITIONAL:
      return { fieldData: { additionalValue: user.fieldData.additionalValue + data.value } };
  }
}

function canUserContribute(user) {
  return REDEEM.APPROVED_STATUS.find(approvedStatus => approvedStatus === user.fieldData.status);
}

module.exports = { getContribute, canUserContribute };