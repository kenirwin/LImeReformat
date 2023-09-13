/*
  token,
  date of last action,
  ip address,
  question identifier,
  response
*/

const csv = require('csvtojson');
let converter = require('json-2-csv');
let csvFilePath;

// get config from command line
if (process.argv.length > 2) {
  const confName = process.argv[2];
  const conf = require('./config/' + confName + '.js');
  csvFilePath = './data/' + conf.filename;
} else {
  console.log(
    'No config specified; run this command as `node read.js <configName>`'
  );
  process.exit(1);
}

let allRows = [];
const getDataForObj = (obj) => {
  conf.questions.forEach((q) => {
    let line = {
      token: obj[conf.tokenCol] || '',
      date: obj[conf.dateCol] || '',
      ip: obj[conf.ip] || '',
      question: q,
      response: obj[q],
    };
    allRows.push(line);
  });
};

(async () => {
  const jsonArray = await csv().fromFile(csvFilePath);
  jsonArray.forEach((row) => {
    getDataForObj(row);
  });
  // convert back to csv
  const output = await converter.json2csv(allRows, {});
  console.log(output);
})();
