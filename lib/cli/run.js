const gulp = require('gulp');
const program = require('commander');

program.parse(process.argv);

const task = program.args[0];

if (!task) {
  program.help();
} else {
  console.log('ii-tools run', task);
}
