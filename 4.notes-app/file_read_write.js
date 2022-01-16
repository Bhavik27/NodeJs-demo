const fs = require("fs");

//readfile data
var fileData = fs.readFileSync('test.json');
var jsonData = fileData.toString();
var parseData = JSON.parse(jsonData);

//write into file
parseData.name = "test"
parseData.age = 20
const stringifyData = JSON.stringify(parseData)
fs.writeFileSync('test.json', stringifyData);