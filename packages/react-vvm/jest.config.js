module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    __DEV__: false,
  },
  moduleNameMapper: {
    '@yoskutik/react-vvm': '<rootDir>/src',
  },
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  coverageReporters: ['json-summary', 'text'],
};
