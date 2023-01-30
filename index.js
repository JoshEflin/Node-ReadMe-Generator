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
    const params = []
    const generate = require ('./utils/generateMarkdown');
    const inquirer = require('./node_modules/inquirer/lib/inquirer');
    function install(response){
        if (response === true){
          inquirer.prompt(
            {
              type : 'input',
              name : 'steps',
              message: 'list your steps',
            }
          ).then((answers)=> {
           params.push(answers)
           writeToFile(generate(params))
          }
        )}
       }
    const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
        default: 'no project here',
    },
    {
        type:'input',
        name: 'description',
        message: 'Please describe your project',
        default: 'I coded some stuff and boy was it fun',
    },
    {
        type : 'confirm',
        name : 'installation',
        message : 'Would you like to include installation instructions?',
        default : false,

    },
    {
        type : 'input',
        name : 'usage',
        message : 'How should this repository be used?',
        default : 'I forgot to answer this question :/'

    },
    {
        type : 'list',
        name : 'license',
        message : 'select a license',
        choices: [
                    "Academic Free License v3.0",
                    "Apache license 2.0",
                    "Artistic license 2.0",
                    "Boost Software License 1.0",
                    "BSD 2-clause \"Simplified\" license",
                    "BSD 3-clause \"New\" or \"Revised\" license",
                    "BSD 3-clause Clear license",
                    "Creative Commons Zero v1.0 Universal",
                    "Creative Commons Attribution 4.0",
                    "Creative Commons Attribution Share Alike 4.0",
                    "Do What The F*ck You Want To Public License",
                    "Educational Community License v2.0",
                    "Eclipse Public License 1.0",
                    "Eclipse Public License 2.0",
                    "European Union Public License 1.1",
                    "GNU General Public License v2.0",
                    "GNU General Public License v3.0",
                    "GNU Lesser General Public License v2.1",
                    "GNU Lesser General Public License v3.0",
                    "ISC",
                    "LaTeX Project Public License v1.3c",
                    "Microsoft Public License",
                    "MIT",
                    "Mozilla Public License 2.0",
                    "Open Software License 3.0",
                    "PostgreSQL License",
                    "SIL Open Font License 1.1",
                    "University of Illinois/NCSA Open Source License",
                    "The Unlicense",
                    "zLib License",
                    "none (no license)"],

    },
    {
        type:'input',
        name: 'tests',
        message: "If you have tested this application, if so provide instructions on how to do so",
        default : "This application doesn't need tests"
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'How might others contribute to this Project? (No response will default to the contributor convenant',
        default: '[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)'

    },
    {
        type: 'input',
        name: 'questions',
        message: 'Are there any questions you would like to put out in the universe for contributors to help you with?',
        default :''

    },
    ];
    
    inquirer
    .prompt(questions)
        .then((answers) => {
            params.push(answers) 
            install(answers.installation)
        // Use user feedback for... whatever!!
    })
    .catch((error) => {
        if (error.isTtyError) {
        console.log(`Prompt couldn't be rendered in the current environment`)
        } else {
        console.log('try again')
        }
    });
    }

init();
 
