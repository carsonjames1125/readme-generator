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
    message: 'What is the name of your repository?'
    //needs to be included
    validate: titleInput => {
        if (titleInput) {
            return true;
        } else {
            console.log('Please enter a valid title.')
            return false;
        }
    }
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
