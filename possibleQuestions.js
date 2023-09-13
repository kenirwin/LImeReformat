const csv = require('csvtojson');
let converter = require('json-2-csv');
const fs = require('fs');
const readline = require('readline');

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

(async () => {
  const jsonArray = await csv().fromFile(csvFilePath);
  let first = jsonArray[0];
  let props = Object.getOwnPropertyNames(first);
  console.log(props);
})();
