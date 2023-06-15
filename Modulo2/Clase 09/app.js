let fs = require('fs');

let mytexto = fs.readFileSync(__dirname + '/txt.txt', 'utf-8');

console.log(mytexto); 