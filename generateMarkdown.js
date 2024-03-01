function renderLicenseBadge(license) {
  if (!license) {
      return ''; }
  return `(Licensed by: ${license}) (https://img.shields.io/badge/License-${license.replace(/ /g, '-')}-blue.svg)`;
}

function renderLicenseLink(license) {
  if (!license) {
      return ''; }
  switch (license) {
      case 'MIT':
       return '[MIT](https://opensource.org/licenses/MIT)';
      case 'GNU GPLv3':
       return '[GPLv3](https://www.gnu.org/licenses/gpl-3.0)';
      case 'Apache':
       return '[Apache](https://opensource.org/licenses/Apache-2.0)';
      default:
          return '';
  }
}

function renderLicenseSection(license) {
  if (!license) {
      return ''; }
  return `## License
  
Licensed under the ${license}. See the link below for more details:
${renderLicenseLink(license)}
`;
}

function generateMarkdown(data) {
  return `# ${data.Title}

## Description
${data.Description}

## Table of Contents
${data.TableOfContents}

## Installation
${data.Installation}

## Usage
${data.Usage}

## Credits
${data.Credits}

${renderLicenseSection(data.License)}

## Badges
${data.Badges}
${renderLicenseBadge(data.License)}
## Features
${data.Features}

## Contribute
${data.Contribute}

## Tests
${data.Tests}
`;
}

module.exports = generateMarkdown;