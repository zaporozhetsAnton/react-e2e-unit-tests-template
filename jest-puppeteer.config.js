module.exports = {
    browserContext: 'incognito',
    launch: {
        defaultViewport: null,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--start-maximized'],
        headless: true, // change to false if you want to see tests execution
        slowMo: 25,
        // if you want to check network uncomment this line and use await jestPuppeteer.debug(); in your test
        // devtools: true,
    },
    server: {
        command: 'http-server -p 3333 ./dist/',
        port: 3333,
        usedPortAction: 'kill',
        debug: true,
    },
};
