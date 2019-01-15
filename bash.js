process.stdout.write('prompt > ');
const pwd = require('./pwd')
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  pwd(cmd)
  // if(cmd === 'pwd'){
  //   process.stdout.write(process.cwd());
  // }
  // else{
  //   process.stdout.write('You typed: ' + cmd);
  // }

  // process.stdout.write('\nprompt > ');

})
