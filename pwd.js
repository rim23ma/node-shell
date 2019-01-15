module.exports = () => {
  // process.stdin.on('data', (data) => {
  //   const cmd = data.toString().trim();

    process.stdout.write(process.cwd());

    process.stdout.write('\nprompt > ');
}
