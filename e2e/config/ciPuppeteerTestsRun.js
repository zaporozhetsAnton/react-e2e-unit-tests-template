const { execSync } = require('child_process');

// Puppeteer fails time to time during CI checks
// ciPuppeteerTestsRun function will rerun e2e tests while they succeed

const ciPuppeteerTestsRun = (max = 1) => {
    let runTestsCommand;
    if (max > 1) {
        runTestsCommand = new Array(max).fill(process.env.COMMAND).join(' || ');
    } else {
        runTestsCommand = process.env.COMMAND;
    }
    execSync(runTestsCommand);
};

ciPuppeteerTestsRun(5);
