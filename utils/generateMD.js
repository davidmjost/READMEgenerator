function badge(license) {
    if (license === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
    else if (license === "SIL") {
        return "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)"
    }
    else if (license === "IBM") {
        return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
    }
    else {
        return ""
    };
};

function createLicenseLink(license) {
    if (license === "none") {
        return ""

    }
    else {
        return "* [Licenses](#Licenses)"
    }
};

function createLicenseSection(license) {
    if (license === "none") {
        return ""

    }
    else {
        return "# Licenses"

    }
};

function generateMD(data) {

    return `# ${data.title} 

    ${badge(data.license)}

    # Table of Contents
    *[Description](#Description)
    *[Installation](#Installation)
    *[Usage](#Usage)
    *[Contribution](#Contribution)
    *[Testing](#Testing)
    ${createLicenseLink(data.license)}
    *[Contact](#Contact)

    # Description
        ${data.description}

    # Installation
        ${data.install}

    # Usage
        ${data.usage}

    # Contributions
        ${data.contribution}
        
    # Testing
        ${data.test}

    ${createLicenseSection(data.license)}

    # Contact
        Please email me with any questions. (Mail to: ${data.email})
        For more examples of my work, please go to (https://github.com/${data.username})
`;
};

module.exports = generateMD;
