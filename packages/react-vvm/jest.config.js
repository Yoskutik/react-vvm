module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    globals: {
        isDev: false,
    },
    moduleNameMapper: {
        '@yoskutik/react-vvm': '<rootDir>/src',
    },
    setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
    coverageReporters: ['json-summary'],
};
