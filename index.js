
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

const questions = [
 {
    type: 'input',
    name: 'Title',
    message: 'What would you like to name your project?',
 },
{
 type: 'input',
 name: 'Description',
 message: 'Provide a short description explaining the what, why, and how of your project.',
},
{
    type: 'input',
    name: 'TableOfContents',
    message: 'Add a table of contents. (optional)',
},
{
    type: 'input',
    name: 'Installation',
    message: 'What are the steps required to install your project?',
},
{
    type: 'input',
    name: 'Usage',
    message: 'Provide instructions and examples for use.',
},
{
    type: 'input',
    name: 'Credits',
    message: 'List your collaborators, if any, with links to their Github profiles.',
},
{
    type: 'list',
    name: 'License',
    message: 'Part of a high-quality README file is the license. Input a license.',
    choices: ['MIT', 'GNU GPLv3', 'Apache'],
},
{
    type: 'input',
    name: 'Badges',
    message: 'Any badges? (Optional)',
},
{
    type: 'input',
    name: 'Features',
    message: 'Does your project have a lot of features? List them here.',
},
{
    type: 'input',
    name: 'Contribute',
    message: 'Would you like other developers to contribute? Include guidelines here.',
},
{
    type: 'input',
    name: 'Tests',
    message: 'Have tests for your application? List any examples here.',
}
];

function writeToFile(README, data) {
    fs.writeFile('README.md', data, (err) => {
  err ? console.log(err) : console.log('README file created')
    });
}

function init() {
    inquirer.prompt(questions).then((data) => {
  const readme = generateMarkdown(data);
  writeToFile('README.md', readme);
    });
}

init();
