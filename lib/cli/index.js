const program = require('commander'); // commander: 帮助快速开发Nodejs命令行工具的package

program.command('run [name]', 'run specified task').parse(process.argv);

const subCmd = program.args[0];

console.log('subCmd:', subCmd);
