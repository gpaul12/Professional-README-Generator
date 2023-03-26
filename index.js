// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project? (Required)",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter yout title!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "githubUsername",
    message: "What is your gitHub Username (Required)",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter your ZGitHub username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "what",
    message: "What is your project and what problems will it solve? (Required)",
    validate: (whatInput) => {
      if (whatInput) {
        return true;
      } else {
        console.log("Please enter what your project is!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "why",
    message: "Why did you create this project? (Required)",
    validate: (whyInput) => {
      if (whyInput) {
        return true;
      } else {
        console.log("Please enter why you created this project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "how",
    message: "How will someone use this? (required)",
    validate: (howInput) => {
      if (howInput) {
        return true;
      } else {
        console.log("Please enter how someone will use this!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message:
      "Please provide step by step installation instructions for your project. (required)",
    validate: (installationInput) => {
      if (installationInput) {
        return true;
      } else {
        console.log("Please enter your installation instructions!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide instructions and examples for use? (required)",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter you use instructions!");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "Which license will you use for your project?",
    choices: ["AGPL", "APACHE", "MIT", "NO LICENSE"],
  },
  {
    type: "confirm",
    name: "confirmContributors",
    message: "Would you like to allow other developers to contribute?",
    default: true,
  },
  {
    type: "input",
    name: "contribute",
    message: "Please provide quidelines for contributing. (required)",
    when: ({ confirmContributers }) => {
      if (confirmContributers) {
        return true;
      } else {
        return false;
      }
    },
    validate: (contributerInput) => {
      if (contributerInput) {
        return true;
      } else {
        console.log("Please enter contributer quidelines!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "test",
    message: "Please provide instructions on how to test the app. (required)",
    validate: (testInput) => {
      if (testInput) {
        return true;
      } else {
        console.log("Please enter your use test instructions!");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/generate-README.md", fileContent, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "Your file has been created!",
      });
    });
  });
};
// TODO: Create a function to initialize app
const init = () => {
  return inquirer.prompt(questions).then((readmeData) => {
    return readmeData;
  });
};

// Function call to initialize app
init()
  .then((readmeData) => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
  })
  .then((pageMD) => {
    return writeFile(pageMD);
  })
  .then((writeFileResponse) => {
    console.log(writeFileResponse.message);
  })
  .catch((err) => {
    console.log(err);
  });
