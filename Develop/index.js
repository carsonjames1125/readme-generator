// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const util = require('util');

// TODO: Create an array of questions for user input
//need to give the user options to for the different sections of the readme and then add them to the table of contents section

const questions = [{
    type: ' input',
    name: 'title',
    message: 'What is the name of your repository?',
    //needs to be included
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter a valid title.');
            return false;
        }
    }
},
{ // description section
    type: 'input',
    name: 'description',
    message: 'How would you descripe this repository? Please answer in a few short sentences.',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter a description.');
            return false;
        }
    }
},

{ //need to know if there is an installation process this section allows the user to determine yes or no.

    type: 'confirm',
    name: 'confirmInstallation',
    message: 'Does your repository contain an installation section?',
   
},
{ // installation section
    type: 'input',
    name: 'installation',
    message: 'What are your installation instructions?',
    // the when statement allows the previous section to take in the user input and if selected yes the user it prompted with the area to enter the installation instructions, if no the section is skipped.
    when: ({ confirmInstallation }) => {
        if (confirmInstallation) {
            return true;
        } else {
            return false;
        }
}},
{ //usage section
    type: 'confirm',
    name: 'confirmUsage',
    message: 'Would you like to add any specific instructions on how to use the application?',
},
{
    type: 'input',
    name: 'usageInstructions',
    message: 'Please list any instructions here. Add any images or links to help explain.',
    when: ({confirmUsage}) => {
        if (confirmUsage) {
            return true;
        } else {
            return false;
        }
    }
},
{ // contribution section

    type: 'confirm',
    name: 'confirmContribution',
    message: 'Were any other developers that contributed to the project?',
},
{
    type: 'input',
    name: 'contribution',
    message: 'Please list and explain contributers.',
    when: ({confirmContribution}) => {
        if (confirmContribution) {
            return true;
        } else {
            return false;
        }
    }
},
{ // testing section
    type: 'confirm',
    name: 'testConfirm',
    message: 'Is there testing available within this application?',
},
{
    type: 'input',
    name: 'testing',
    message: 'How can your application be tested? Please describe here.',
    when: ({testConfirm}) => {
        if (testConfirm) {
            return true;
        } else {
            return false;
        }
    }
},
{ // license section (with checkbox)
    type: 'checkbox',
    name: 'license',
    message: 'Select a License for your application:',
    choices: ['Apache License 2.0', 'MIT License', 'GNU General Public License v3.0', 'GNU Affero General Public License v3.0', 'Eclipse Public License 2.0', 'The Unilicense'],
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please select a license from the given list.')
            return false;
        }
    }
},
{
    
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
