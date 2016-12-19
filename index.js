'use strict';
const tunings = require('./tunings.json');

const parseTuningString = tuning => {
  const arr = [];
  let current = '';
  for (let s = 0; s < tuning.length; s++) {
    current += tuning[s];
    if (tuning[s + 1] !== '#' && tuning[s + 1] !== 'b') {
      arr.push(current);
      current = '';
    }
  }
  return arr;
};

module.exports = tunings;

module.exports.toArray = parseTuningString;
