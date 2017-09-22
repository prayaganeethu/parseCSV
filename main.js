//Load the external module "fs"
let fs = require("fs");


let data = fs.readFileSync('Sample.csv');

data = data.toString().split("\n");

let arr = [], str = "";

for(let i = 0; i < data.length; i++)	{
	let k = 0;
	for(let j = k; j < data[i].length; j++) {
		if(data[i][j] == "\"") {
			let indx = data[i].slice(j+1,data[i].length).indexOf("\"");
			let str1 = data[i].slice(j+1,indx+1);
			arr.push(str1);
			k = indx + 1;
			continue;
		}

		if(data[i][j] == ",")	{
			k = j+1;
			arr.push(str);
			str = "";
			continue;
		}
		
		if(data[i][j] == "\\" && data[i][j] == "r")
			break;
		str += data[i][j];
	}	
}

console.log(arr);


