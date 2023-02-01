const { default: inquirer } = require("inquirer");

// makes a badge from the users input, splits on white space and joins with an underscore so the URL works.
function renderLicenseBadge(license) {
  if (license !== "none (no license)"){
    let badge =license.split(' ').join('_');
    return `![License](https://img.shields.io/badge/license-${badge}-blue?logo=github)`
  } else {
    return "No license";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none (no license)"){
    return "- [License](#license)";
  } else{
    return ``
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none (no license)"){

    return ` This repository is licensed under
    ${license}`;
  }
}
 
function generateMarkdown(response) {
  
  console.log(response)
  let steps= response[1]=== undefined ?  'there are no install steps':  response[1].steps; 
    
  return `
# ${response[0].title}
${renderLicenseBadge(response[0].license)}

## Description
${response[0].description}

## Table of Contents
${renderLicenseLink(response[0].license)}
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#Questions)

## License
${renderLicenseSection(response[0].license)}
 ## Installation
 ${steps}

 ## Usage
 ${response[0].usage}

 ## Contributing
 ${response[0].contributions}

 ## Tests
 ${response[0].tests}

 ## Questions

 Feel free to peruse my git hub profile here:
 https://github.com/${response[0].github}

 Or send an email to:
 ${response[0].email}
 with  any further questions.

  
 
`
}

module.exports = generateMarkdown;

