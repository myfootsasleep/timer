// process.stdout.write('\u0007');
let param = process.argv.slice(2).map(i=>Number(i));
for (let i = 0; i < param.length; i++) {
  if (param[i] !== NaN && param[i] > 0) {
    setTimeout(() =>{
      process.stdout.write('\u0007')
    },(param[i] * 1000));
  }
}