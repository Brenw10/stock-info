function monthDiff(d1, d2) {
  const yearMonth = (d1.getFullYear() - d2.getFullYear()) * 12;
  const months = d1.getMonth() - d2.getMonth();
  return yearMonth + months;
}

module.exports = { monthDiff };