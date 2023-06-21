// TODO: Create a function that returns a license badge based on which license is passed in

// let markDown = data => {
//   let licenseName = `${data.license}`;
//   let licenseLink = '';

//   if (licenseName === 'Apache License 2.0') {
//     licenseName = 'Apache License 2.0';
//     licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
//   };

//   if (licenseName === 'MIT License') {
//     licenseName = 'MIT License';
//     licenseLink = 'https://choosealicense.com/licenses/mit/';
//   };

//   if (licenseName === 'GNU General Public License v3.0') {
//     licenseName = 'GNU General Public License v3.0';
//     licenseLink = 'https://choosealicense.com/licenses/agpl-3.0/';
//   };

//   if (licenseName === 'GNU Affero General Public License v3.0') {
//     licenseName = 'GNU Affero General Public License v3.0';
//     licenseLink = 'https://choosealicense.com/licenses/agpl-3.0/';
//   };

//   if (licenseName === 'The Unilicense') {
//     licenseName = 'The Unilicense';
//     licenseLink = 'https://choosealicense.com/licenses/mit/';
//   };

// let markDownTemplate = 

// `# ${data.title}

// ## Description

// ${data.desciption}


// `;

// let tableofContents = 

// `## Table of Contents`;
// if (data.installation) {
//   tableofContents +=
//     `
    
//    * [Installation] (#installation)` 
// };
// if (data.instructions) {
//   tableofContents +=

//     `
//     * [Usage] (#usage)`
// };
// if (data.contribution) {
//   tableofContents +=

//     `
//     * [Contribution] (#contribution)`
// };
// if (data.testing) {
//   tableofContents +=

//     `
//     * [Testing] (#testing)`
// };

// // need to append these items to the template
// markDownTemplate += tableofContents

// //add the contact info and license sections

// markDownTemplate +=
// `
// * [License](#license)`;

// // installation

// if (data.installation) {
//   markDownTemplate += 
//   `
// ## Installation

// _Use these instructions to install the application;_


//   ${data.installation}`
// };
// if (data.instructions) {
//   markDownTemplate += 
//   `
// ## Usage

// _How to use application;_


//   ${data.instructions}`
// };
// if (data.contribution) {
//   markDownTemplate += 
//   `
// ## Contributions

// _Contributors to the application;_


//   ${data.contribution}`
// };
// if (data.testing) {
//   markDownTemplate += 
//   `
// ## Testing

// _Use these instructions to install the application;_


//   ${data.testing}`
// };
// if (data.installation) {
//   markDownTemplate += 
//   `

// ## License

// _This application uses ${data.license}._


//   ${data.installation}`
// };

// }
// // // If there is no license, return an empty string
// // function renderLicenseBadge(license) {}

// // // TODO: Create a function that returns the license link
// // // If there is no license, return an empty string
// // function renderLicenseLink(license) {}

// // // TODO: Create a function that returns the license section of README
// // // If there is no license, return an empty string
// // function renderLicenseSection(license) {}

// // // TODO: Create a function to generate markdown for README
// // function generateMarkdown(data) {
// //   return `# ${data.title}

// // `;
// // }

const generateMarkdown = data => {
  return `# ${data.title}
  
  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usageInstructions)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests](#testing)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project is covered under the ${data.license}.

  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.testing}
  
  `;
}


module.exports = generateMarkdown;
