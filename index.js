const glob = require('glob');
const path = require('path');
const fs = require('fs');

// Define the directories where your HTML files are located
const componentsDir = path.join(__dirname, 'src', 'html', 'components');
const templatesDir = path.join(__dirname, 'src', 'html', 'templates');

// Create an object to store the exports
const emailExports = {};

// Use glob.sync to get a list of specific files in the src directory
const componentFiles = glob.sync(path.join(componentsDir, '*.html'));
const templateFiles = glob.sync(path.join(templatesDir, '*.html'));

// Loop through the files and export them
componentFiles.forEach((file) => {
  const fileName = path.basename(file, path.extname(file));
  emailExports[fileName] = fs.readFileSync(file, 'utf-8');
});

templateFiles.forEach((file) => {
  const fileName = path.basename(file, path.extname(file));
  emailExports[fileName] = fs.readFileSync(file, 'utf-8');
});


module.exports = emailExports;
