
function renderLicenseBadge(data) {

    if (data.license == 'Apache 2.0') {
      badge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
    } else if (data.license == 'MIT'){
      badge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    } else if (data.license == 'GPLv2') {
      badge = `![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)`
    } else if (data.license == 'GPLv3') {
      badge = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    } else if (data.license == 'BSD 3-clause') {
      badge = `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`
    } else {
      badge = ''
    }
  
  }
  
  // TODO: Create a function that returns the license link
  
  function renderLicenseLink(data) {
    if (data.license == 'Apache 2.0') {
      licenseLink = `https://opensource.org/licenses/Apache-2.0`
    } else if (data.license == 'MIT'){
      licenseLink = `https://opensource.org/licenses/MIT`
    } else if (data.license == 'GPLv2') {
      licenseLink = `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`
    } else if (data.license == 'GPLv3') {
      licenseLink = `https://www.gnu.org/licenses/gpl-3.0`
    } else if (data.license == 'BSD 3-clause') {
      licenseLink = `https://opensource.org/licenses/BSD-3-Clause`
    } else {
      licenseLink = ''
  }
  }
  
  // TODO: Create a function that returns the license section of README
 
  function renderLicenseSection(data) {
    if (data.license == 'none') {
      licenseSection = 'N/A'
    } else {
      licenseSection = `This application is covered under a(n) <a href = "${licenseLink}">${data.license}</a> license`
    }
  
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data){
    renderLicenseLink(data)
    renderLicenseBadge(data)
    renderLicenseSection(data)
    return `# ${data.title} <a href= "${licenseLink}">${badge}</a>

  ## Description
    ${data.description}

  ## Table of content

  [Installation](#installation)

  [Usage](#usage)

  [License](#license)

  [Contributing](#contributing)

  [Tests](#tests)

  [Questions](#questions)

  ## Installation <a id="installation"></a>
    ${data.installation}
  ## Usage <a id="usage"></a>
    ${data.usage}
  ## License <a id="license"></a>
  ${licenseSection}
  ## COntribution <a id="contributing"></a>
    ${data.contributing}
  ## Tests <a id="tests"></a>
    ${data.tests}

  ## Questions <a id="questions"></a>
  If you have any Questions contact on the below links

  Github: <a href="https://github.com/${data.githubUsername}"> ${data.githubUsername}</a>
  
  Email: ${data.email} 
        
  `;
  }

module.exports= generateMarkdown;