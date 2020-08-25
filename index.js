const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./generateMarkdown")
 




// array of questions for user
const questions = [
{ type: "input",
message: "what is your gitHub username?",
name: "gitHub"

},
{type: "input",
message: "what is your email address?",
name: "email"},

{type: "input",
message: "what is your project name?",
name: "title"},

{ type: "input",
message: "Please write a short description of your project?",
name: "description"

},
{type: "list",
message: "What kind of license should your project have?",
name: "license",
choices: ["mit","apache"]},

{type: "input",
message: "what command should be run to install dependencies?",
name: "install"},

{type: "input",
message: 'What command should be run to run test?',
name: "test"},

{type: "input",
message: "what does the user need to know about using the repo?",
name: "repo"},

{type: "input",
message: 'What does the user need to know about contributing to the repo?',
name: "contributing"},
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync (path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
inquirer.prompt(questions)
.then((answers) =>{
    writeToFile("README.md", generateMarkdown({...answers}));
})
}

// function call to initialize program
init();
