let fs = require("fs");

let data = fs.readFileSync('Sample.csv');

console.log(data.toString());