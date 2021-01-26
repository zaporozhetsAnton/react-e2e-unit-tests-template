module.exports = {
    preset: 'jest-puppeteer',
    setupFilesAfterEnv: ['<rootDir>/e2e/config/setupTests.js'],
    testMatch: ['<rootDir>/e2e/**/*.test.ts'],
};
