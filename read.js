/*
  token,
  date of last action,
  ip address,
  question identifier,
  response
*/

let csvFilePath = './temp.csv';
const csv = require('csvtojson');
let converter = require('json-2-csv');

let allRows = [];
const getDataForObj = (obj) => {
  questions.forEach((q) => {
    let line = { user: obj['User'], question: q, response: obj[q] };
    allRows.push(line);
  });
};

const questions = ['Question1', 'Question2', 'Question3'];
(async () => {
  const jsonArray = await csv().fromFile(csvFilePath);
  jsonArray.forEach((row) => {
    getDataForObj(row);
  });
  // console.log(allRows);
  const output = await converter.json2csv(allRows, {});
  console.log(output);
})();
