const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
    preset: 'ts-jest',
    modulePaths: ['<rootDir>'],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/src/' } ),
    testPathIgnorePatterns: ['<rootDir>/e2e'],
    setupFilesAfterEnv: ['./jest.unit.setup.js'],
    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
};
