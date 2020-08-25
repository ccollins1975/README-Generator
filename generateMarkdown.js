// function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}

  ![Badge](https://img.shields.io/badge/License-${data.license}-RED)

## Description
 ${data.description}
 ## Table of Contents

 * [Installation](#installation)
 * [Usage](#usage)
 * [License](#license)
 * [Contributing](contributing)
 * [Tests](tests)
 * [Questions](questions)

 ## Installation
 ${data.install}
 ## Usage
 ${data.repo}
 ## License
 ${data.license}
 ## Contributing
 ${data.contributing}
 ## Tests
 ${data.test}
 ## Questions
 Direct all questions to ${data.email}

 
`;
}

module.exports = generateMarkdown;
