const { execSync } = require('child_process');

// Puppeteer fails time to time during CI checks
// ciPuppeteerTestsRun function will rerun e2e tests while they succeed

const ciPuppeteerTestsRun = (maxAttempts = 1) => {
    const runTestsCommand =
        maxAttempts > 1 ? new Array(maxAttempts).fill(process.env.COMMAND).join(' || ') : process.env.COMMAND;
    execSync(runTestsCommand);
};

ciPuppeteerTestsRun(5);
