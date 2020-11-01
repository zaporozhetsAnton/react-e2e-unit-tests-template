module.exports = {
    preset: 'jest-puppeteer',
    setupFilesAfterEnv: ['<rootDir>/e2e/config/setupTests.js'],
    testPathIgnorePatterns: ['<rootDir>/__tests__'],
};
