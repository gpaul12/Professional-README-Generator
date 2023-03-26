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
    name: "outCome",
    message: "What is your project and what problems will it solve? (Required)",
    validate: (outComeInput) => {
      if (outComeInput) {
        return true;
      } else {
        console.log("Please enter what your project outcome is!");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
