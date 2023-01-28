// TODO: Include packages needed for this application
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create a function to write README file
function writeToFile(data) {
    const fs = require('fs/promises');
    fs.writeFile("test.md", data).then (response => console.log('done'))
}

// TODO: Create a function to initialize app
function init() {

    const generate = require ('./utils/generateMarkdown');
    const inquirer = require('./node_modules/inquirer/lib/inquirer');
    const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
        default: 'no project here',
    },
    {
        type:'lnput',
        name: 'description',
        message: 'Please describe your project',
        default: 'I coded some stuff and boy was it fun',
    },
    {
        type : 'confirm',
        name : 'tableOfContents',
        message : 'Would you like to include a table of contents?',
        default : true,

    },
    {
        type : 'confirm',
        name : 'installation',
        message : 'Would you like to include installation instructions?',
        default : false,

    },
    {
        type : 'confirm',
        name : 'usage',
        message : 'Would you like to include usage terms?',
        default : false,

    },
    {
        type : 'confirm',
        name : 'license',
        message : 'are you using an MIT (open source) license',
        default : true,

    },
    ];
    inquirer
    .prompt(questions)
        .then((answers) => {
        console.log(answers)
        writeToFile(generate(answers))
        
        // Use user feedback for... whatever!!
    })
    .catch((error) => {
        if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        } else {
        // Something else went wrong
        }
    });

    }

init();
 
