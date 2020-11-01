module.exports = {
    launch: {
        headless: true,
        args: ['--disable-web-security', '--no-sandbox'],
        // uncomment these line if you want to see tests execution
        // headless: false,
        slowMo: 10,
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
