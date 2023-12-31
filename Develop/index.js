// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
//need to give the user options to for the different sections of the readme and then add them to the table of contents section

const questions = () => {
    return inquirer.prompt([
    {
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
    message: 'How would you describe this repository? Please answer in a few short sentences.',
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
    type: 'list',
    name: 'license',
    message: 'Select a License for your application:',
    choices: ['Apache License 2.0 (https://choosealicense.com/licenses/apache-2.0/)', 'MIT License (https://choosealicense.com/licenses/mit/)', 'GNU GPL v3.0 (https://choosealicense.com/licenses/agpl-3.0/)','GNU AGPL v3.0 (https://choosealicense.com/licenses/agpl-3.0/)','The Unilicense (https://choosealicense.com/licenses/mit/)'],
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please select a license from the given list.');
            return false;
        }
    }
},
{ //username section for github
    type: 'input',
    name: 'username',
    message: 'What is your username for GitHub?',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter a GitHub username.');
            return false;
        }
    }
},
{ // email section
    type: 'input',
    name: 'email',
    message: 'Enter Email address:',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter a valid email address.');
            return false;
        }
    }
},
    ]);
 }; // end of the questions array 



// moving on to writing the readme file with the questions from above 
// need to write a function that creates the readme file

// TODO: Create a function to write README file

const writeFile = data =>{
    fs.writeFile('README.md', data, err => {
        // if error
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Your README file will be created shortly.')
        }
    })
};




// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, error => {
//         if (error) {
//             return console.log('Error occured please try again or contact support if this error persists. 999-999-9999. Error:' + error);
//         }
//     })
// } // this allows the apps to take in parameters, and if an error occurs it notifys the users of those errors. 

//this function creates the app
// const createReadMe = util.promisify(writeToFile);

// TODO: Create a function to initialize app

questions()
.then(answers => {
    return generateMarkdown(answers);
})
.then(data => {
    return writeFile(data);
})
.catch(err => {
    console.log(err)
})

//async function init() {
//     try {
//         const userInput = await inquirer.prompt(questions);
//         console.log('Thank you for your input, Your ReadMe file will be created shorty using ', userInput);
//         //need to pull markdown now 
//         const markDown = generateMarkdown(userInput);
//         console.log(markDown);
//         await createReadMe('README3.md', markDown);

//     } catch (error) {
//         console.log('No file could be created error, ' + error);
//     }
// };

// Function call to initialize app

