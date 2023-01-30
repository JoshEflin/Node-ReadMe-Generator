const { default: inquirer } = require("inquirer");

// makes a badge from the users input, splits on white space and joins with an underscore so the URL works.
function renderLicenseBadge(license) {
  if (license !== "none (no license)"){
    let badge =license.split(' ').join('_');
    return `![License](https://img.shields.io/badge/license-${badge}-blue?logo=github)`
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none (no license)"){
    return "";
  } else{
    return `- [License](#license)`
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none (no license)"){

    return "";
  }
}
 
function generateMarkdown(response) {
  console.log(response[0])
console.log(response[1])
 let steps;
  if (response[1]=== undefined) {
    steps = 'there are no install steps';
  }
  else {
    steps =response[1].steps; 
  }
  return `
# ${response[0].title}
${renderLicenseBadge(response[0].license)}

## Description
${response[0].description}
${steps}

## Table of Contents
${renderLicenseLink(response[0].license)}
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [Contact](#contact)

## License

 ## Installation
 ${response[0].installation}

 ## Usage
 ${response[0].usage}

 
`

}


// ## Usage

// Provide instructions and examples for use. Include screenshots as needed.

// To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:


 


// 🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

// ## Badges

// ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

// Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.



module.exports = generateMarkdown;

