---
# WebDriverIO and JavaScript Automation Framework Setup Guide
---

## Getting started

### Pre-requisites

- Download and install Node.js
- Download and install any Text Editor like Visual Code/Sublime/Brackets

### Setup Visual Code

- Install GitLens Extension from the Marketplace: `GitLens — Git supercharged by GitKraken`
- Go to Visual Code Preference > Setting and search `formatOnSave` and enable/ON it.

### Setup Scripts

- Clone the repository into a folder
- Go to Project root directory and install Dependency: `npm install`
- All the dependencies from package.json would be installed in node_modules folder.

### How to Run Test

- Go to Project root directory and run command: `npm run wdio`
- If you want to run api tests then run command: `npm run wdio:api`

### How to Update local npm packages

- Go to Project root directory and run command: `npm update`

### How to view HTML report

- For UI : After running the tests run : `npm allure`
- For API : After running the tests run : `go to ./mochawesome-report/mochawesome.html`
### Sample Test Results

![WebDriverIO and JavaScript Test Report](./assets/Allure-Report1.png?raw=true "WebDriverIO and JavaScript Test Report")

![WebDriverIO and JavaScript Test Report Expanded View](./assets/Allure-Report-Detailed-View.png?raw=true "WebDriverIO and JavaScript Test Report Expanded View")

![WebDriverIO and JavaScript Test Report Expanded View](./assets/API-TestReport.png?raw=true "WebDriverIO and JavaScript Test Report Expanded View")
