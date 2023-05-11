var fs = require('fs');
fs.renameSync('welcome.txt', 'hello.txt'),'utf8';
console.log('File Renamed');


// var fs = require("fs");
// var data = fs.readFileSync('welcome.txt');

// console.log(data.toString());
// fs.readFile(path.join(__dirname, 'test', 'welcome.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });
  
//   console.log('hello');
  