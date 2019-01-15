process.stdout.write('prompt > ');
const pwd = require('./pwd')
const ls = require('./ls')
const fs = require('fs')
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  const cmdArray = cmd.split(' ');
  if(cmd === 'pwd'){
    pwd();
  }
  else if(cmd === 'ls'){
    ls();
  }
  else if (cmdArray[0] === 'cat') {
    fs.readFile(`./${cmdArray[1]}`, 'utf8', function (err, data) {
      if (err) {
        throw err
      }
      process.stdout.write(data);
      process.stdout.write('\nprompt > ');
    })
  }
  else{
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write("prompt > ");
  }

  // process.stdout.write('\nprompt > ');

})
