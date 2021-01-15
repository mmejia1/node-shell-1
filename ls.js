const fs = require('fs');

// const callback = fs.readdir('./', 'utf8', (err, files) => {
//   if (err) {
//     throw err;
//   } else {
//     process.stdout.write(files.join('\n'));
//     process.stdout.write('prompt >');
//   }
// });

const lsFunction = function ls() {
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(files.join('\n'));
      process.stdout.write('prompt >');
    }
  });
};

module.exports = lsFunction;
