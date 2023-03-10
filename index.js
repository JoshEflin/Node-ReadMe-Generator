
//this functions creates the sampe README
function writeToFile(data) {
    const fs = require('fs/promises');
    fs.writeFile("testREADME.md", data).then(response => console.log('done'))
}

// all the code is wrapped in the init function to limit global variables
function init() {
    const params = []
    const generate = require('./utils/generateMarkdown');
    const inquirer = require('inquirer');


    const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?',
            default: 'no project here',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project',
            default: 'I coded some stuff and boy was it fun',
        },
        {
            type: 'confirm',
            name: 'installation',
            message: 'Please list installation steps if there are any',

        },
        {
            type: 'input',
            name: 'usage',
            message: 'How should this repository be used?',
            default: 'I forgot to answer this question :/'

        },
        {
            type: 'list',
            name: 'license',
            message: 'select a license',
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

            default: 'none (no license)',

        },
        {
            type: 'input',
            name: 'tests',
            message: "If you have tested this application, if so provide instructions on how to do so",
            default: "This application doesn't need tests"
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'How might others contribute to this Project? (No response will default to the contributor convenant badge',
            default: '[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md) Contributions adhere to the Contributor Covenant, for more information go to https://www.contributor-covenant.org/',

        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
    ];
// if the user answers Yes to installation steps then this question is asked.
    function install(response) {
        if (response === true) {
            inquirer.prompt(
                {
                    type: 'input',
                    name: 'steps',
                    message: 'list your steps',
                }
            ).then((answers) => {
                params.push(answers)
                writeToFile(generate(params))
            }
            )
        }
        else {
            console.log(params)
            writeToFile(generate(params))
        }
    }
    inquirer
        .prompt(questions)
        .then((answers) => {
            params.push(answers)
            install(answers.installation)
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log(`Prompt couldn't be rendered in the current environment`)
            } else {
                console.log('try again')
            }
        });
}
// calls the init function which is the majority of this file
init();

