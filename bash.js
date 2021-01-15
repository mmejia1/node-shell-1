const pwd = require('./pwd');
const ls = require('./ls');
const fs = require('fs');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  if (cmd === 'pwd') {
    console.log(pwd);
    pwd();

    // process.stdout.write(`Your directory: ${process.cwd()}`);
  } else if (cmd === 'ls') {
    console.log(ls);
    ls();
  } else {
    process.stdout.write('You typed: ' + cmd);
  }
  process.stdout.write('\nprompt > ');
});
