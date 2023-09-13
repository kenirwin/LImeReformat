- add a csv file to the `data` folder
- create a `config/<filename>.js` file that includes:

  ```
  conf = {
    filename: 'ONET_Take1.csv',
    questions: [

    ],
    tokenCol: 'Token', // name of the uniq id column
    dateCol: 'Date last action', // or the name of the date column
    ip: 'IP address', // or the name of the IP column
  };
  module.exports = conf;
  ```

- from the command line, run `node possibleQuestions.js <config file>`, e.g. `node index.js config` (leave off the `.js`)
- copy any of the output into the `questions` array in the config file; you can more easily limit this to the questions you want by doing: `node possibleQuestions.js <config file> | grep -i 'Back translation'`
- from the command line, run `node index.js <config file>`, e.g. `node index.js config` (leave off the `.js`)
