const path = require('path');
const chalk = require('chalk'); //终端样式库

function reportNoConfig() {
  console.log(chalk.bgRed('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'));
  console.log(chalk.bgRed("!! Unable to setup II-tools: project's package.json either missing !!"));
  console.log(chalk.bgRed('!! or malformed. Run `npm init` and then reinstall II-tools.       !!'));
  console.log(chalk.bgRed('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'));
}

function reportCompletion() {
  console.log(chalk.bgGreen('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'));
  console.log(chalk.bgGreen('!! II-tools was successfully installed for the project. !!'));
  console.log(chalk.bgGreen('!! Use `npm run pub` command for publishing.       !!'));
  console.log(chalk.bgGreen('!! publishing configuration.                                  !!'));
  console.log(chalk.bgGreen('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'));
}

function init() {
  // NOTE: <projectDir>/node_modules/ii-tools/lib
  const projectDir = path.join(__dirname, '../../../');

  try {
    const cfg = require(path.join(projectDir, 'package.json'));

    if (!cfg) {
      reportNoConfig();
      process.exit(1);
    } else {
      reportCompletion();
    }
  } catch (error) {
    console.log('error:', error);
  }
}

init();
