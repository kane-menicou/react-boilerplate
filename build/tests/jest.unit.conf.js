const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testPathIgnorePatterns: [
    '<rootDir>/e2e',
  ],
  cacheDirectory: './.cache',
  moduleNameMapper: {
    '^.+\\.(png|s([ca])ss)?$': '<rootDir>/build/stub.js',
  },
  setupFiles: ['<rootDir>/build/tests/jest.setup.js'],
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
}
