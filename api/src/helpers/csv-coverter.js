const csvToJson = require('convert-csv-to-json')

let json = csvToJson
    .parseSubArray('"', ',')
    .fieldDelimiter(',')
    .getJsonFromCsv('data/london_stations.csv');

let lines = []

for (let i = 0; i < json.length; i++){

}

module.exports = json
