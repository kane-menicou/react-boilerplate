const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testPathIgnorePatterns: [
    '<rootDir>/src',
  ],
  cacheDirectory: './.cache',
  setupFiles: ['<rootDir>/build/tests/jest.e2e.setup.js'],
}
