const fs = require('fs');
const assign = require('object-assign');
const { getProjectPath } = require('./utils/projectHelper');

module.exports = function() {
  let my = {};
  if (fs.existsSync(getProjectPath('tsconfig.json'))) {
    my = require(getProjectPath('tsconfig.json'));
  }

  return assign(
    {
      target: 'es6',
      jsx: 'preserve'
    },
    my.compilerOptions
  );
};
