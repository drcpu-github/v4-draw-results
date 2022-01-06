const spawn = require('child_process').spawn;

async function spawnCLIProcess(chainId, ticket, drawId, directory) {
  console.log('spawning node process');
  const child = spawn(
    'node',
    [
      './node_modules/@pooltogether/draw-calculator-cli/dist/index.js',
      '-c',
      chainId,
      '-t',
      ticket,
      '-d',
      drawId,
      '-o',
      directory,
    ],
    { cwd: process.cwd() },
  );

  child.stdout.on('data', (chunk) => {
    console.log(chunk.toString());
  });
  child.stderr.on('data', (chunk) => {
    console.log(chunk.toString());
  });

  await new Promise((resolve) => {
    child.on('close', resolve);
  });
}
module.exports = spawnCLIProcess;
