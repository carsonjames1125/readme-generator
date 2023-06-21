// TODO: Create a function that returns a license badge based on which license is passed in
// TRIED TO USE CODE BELOW BUT COULD NOT GET FILE TO RENDER CORRECTLY SO JUST LEFT IN FOR REFERENCE FOR MY LICENSE SECTION. 
// let licenseName = `${data.license}`;
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
  
 // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

 // TODO: Create a function that returns the license link
 // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README


// function to generate readme with all sections and the table on contents
const generateMarkdown = data => {
  return `# ${data.title} 

  ## Description
  ---
  ${data.description}

  ## Table of Contents (Optional)
  ---
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ---
  ${data.installation}

  ## Usage
  ---
  ${data.usage}

  ## License
  ---
  This project is covered under the ${data.license}.

  ## Contribution

  ${data.contribution}

  ## Tests

  ${data.testing}

  ## Questions
  ---
  
  If you have anything you would like to ask me about this project or anymore, please contact me by email at ${data.email}. If you want to see anymore of my work, my GitHub username is ${data.username}.

  `;
}

//exports the readme templete and its contents to a readme file.
module.exports = generateMarkdown;
