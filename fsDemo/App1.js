var fs = require("fs");

// Asynchronous - Opening File
// console.log("Going to open file!");
// fs.open('./test/myfile.txt', 'r+', function(err, fd) {
//    if (err) {
//       return console.error(err);
//    }
//    console.log("File opened successfully!");     
// });

fs.stat('./test/myfile.txt', (err,stats)=>{
    console.log(stats);
});

