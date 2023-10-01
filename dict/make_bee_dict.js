const alpha = /^[a-z]+$/;
const fs = require("fs");
const dict = fs
	.readFileSync("./words.txt","utf8").toLowerCase().split("\n")
	.filter(x=>x.length>3&&x.match(alpha))
	.join('\n')
fs.writeFileSync('./bee.txt',dict);