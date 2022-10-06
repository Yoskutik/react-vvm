module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '@yoskutik/react-vvm': '<rootDir>/src',
    },
    transform: {
        '^.+\\.(js|jsx)?$': 'babel-jest'
    },
    setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
};
