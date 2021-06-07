const inquirer = require("inquirer");
const fs = require("fs");

// User input
const renderReadMe = (userInput) =>
    `# ${userInput.title}
## Description
${userInput.description}
## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contribution)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation

Github repository is located at (${userInput.repo}). The deployed application is located at (${userInput.deployedlink})

## Usage
${userInput.usage}

## License
${userInput.license}

## Contributing
${userInput.contribution}

## Tests
${userInput.test}

## Questions
Find me on Github at https://github.com/${userInput.github}. Contact me at ${userInput.email}.
`;

inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "Provide a title for your project",
        },
        {
            type: "input",
            name: "description",
            message: "Describe the purpose of your project",
        },
        {
            type: "input",
            name: "usage",
            message: "Describe the intended usage of your project and how to obtain your code",
        },
        {
            type: "input",
            name: "repo",
            message: "Enter the link to your repository",
        },
        {
            type: "input",
            name: "deployedlink",
            message: "Enter the link to your deployed project",
        },
        {
            type: "input",
            name: "contribute",
            message: "Describe if users may or may not contribute to your project",
        },
        {
            type: "input",
            name: "license",
            message: "Enter your license",
        },
        {
            type: "input",
            name: "test",
            message: "Provide information about any tests included",
        },
        {
            type: "input",
            name: "github",
            message: "Please enter your GitHub username",
        },
        {
            type: "input",
            message: "Please enter your email address",
            name: "email",
        },
    ])
    .then((userInput) => {

        const readMeFinal = renderReadMe(userInput);

        fs.writeFile("README.md", readMeFinal, (err) =>
            err ? console.log(err) : console.log("Successfully created README.md!")
        );
    });
