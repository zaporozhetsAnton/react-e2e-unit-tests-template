const { execSync } = require('child_process');

// Puppeteer fails time to time during CI checks
// ciPuppeteerTestsRun function will rerun e2e tests while they succeed

const ciPuppeteerTestsRun = (max = 1) => {
    const COMMAND = process.argv.find((val) => val.includes('COMMAND')).replace('COMMAND=', '');
    let runTestsCommand;
    if (max > 1) {
        runTestsCommand = new Array(max).fill(COMMAND).join(' || ');
    } else {
        runTestsCommand = COMMAND;
    }
    execSync(runTestsCommand);
};

ciPuppeteerTestsRun(10);
