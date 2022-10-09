module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '@yoskutik/react-vvm': '<rootDir>/src',
    },
    setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
    coverageReporters: ['json-summary'],
};
