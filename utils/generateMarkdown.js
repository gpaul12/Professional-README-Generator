function renderContributerSection(confirmContributers, data) {
  if (!confirmContributers) {
    return `
    Thank you for your interest in assisting, however, we will not be accepting third party contributions.
    `;
  } else {
    return `
    ${data}
    `;
  }
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "NO LICENSE") {
    return `
    ![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
  } else {
    return " ";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "NO LICENSE") {
    return `
  [${license}](https://choosealicense.com/licenses/${license})
    `;
  } else {
    return " ";
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "NO LICENSE") {
    return `
    ## [License](#table-of-contents)

    The application is covered under the following license:

    ${renderLicenseLink(license)}
    `;
  } else {
    return " ";
  }
}
function renderLicenseTOC(license) {
  if (license !== "NO LICENSE") {
    return `
    * [License](#license)
    `;
  } else {
    return " ";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseTOC(data.license)}
  * [Contributing](#contributing)
  * [Tests](#test)
  * [Questions](#questions)

  ## [Description](#table-of-contents)

  ${data.what}

  ${data.why}

  ${data.how}

  
`;
}

module.exports = generateMarkdown;
