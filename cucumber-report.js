
// Prepare folder structure
const fs = require('fs-extra');
const dir = './cypress/reports/html';
if (fs.existsSync(dir)){  fs.removeSync(dir); }
fs.mkdirSync(dir);

// Report configuration
const reporter = require('cucumber-html-reporter');
const options = {
    jsonDir: 'cypress/reports',
    output: 'cypress/reports/html/cucumber-report.html',
    theme: 'bootstrap',
    launchReport: true,
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    metadata: {
    }
};

// Generate report
reporter.generate(options);
