module.exports = {
    launch: {
        headless: true,
        slowMo: 100,
    },
    server: {
        command: 'http-server -p 3333 ../dist/',
        port: 3333,
        debug: true,
    },
    browserContext: 'incognito'
};
