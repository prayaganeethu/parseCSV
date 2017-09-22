//Load the external module "fs"
let fs = require("fs");
let jsnObj = {};
let data = fs.readFileSync('SalesJan2009.csv');
data = data.toString().split("\r");
let title = data[0].split(",");
let entries = [];

function mapTitleValue(row) {
	let str = {};
	for(let j = 0; j < row.length - 1; j++)	{
		str[title[j]] = row[j];	
	}
	return str;
}

for(let i = 1; i < data.length - 1; i++)	{
	row = data[i].split(",");
	console.log(row);	
	entries.push(mapTitleValue(row));
}

console.log(JSON.stringify(entries,null,2));


