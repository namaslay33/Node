//My First I/O! - Exercise 3 of 13

// Write a program that uses a single synchronous filesystem operation to
//   read a file and print the number of newlines (\n) it contains to the
//   console (stdout), similar to running cat file | wc -l.

var fs = require('fs');

fs.readFileSync(process.argv[2], 'utf8', function (err, data) {
    if (err) return console.error(err);
    var length = data.toString().split("\n").length;
    if (length > 0) length -= 1;
    console.log(length);
});