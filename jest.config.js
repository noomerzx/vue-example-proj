module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue'
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'
  },
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],
  testURL: 'http://localhost/',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ],
  collectCoverageFrom: [
    "src/**/*.{js,ts}",
    "!src/router/**/*",
    "!src/i18n.ts",
    "!src/main.ts",
    "!src/router/*",
    "!src/models/**/*", // when API is stable must enable coverage src/models
    "!src/utils/transform.ts", // when API is stable must enable coverage
    "!src/store/*.js",
    "!src/**/*.d.ts",
    "!src/views/*.vue",
    "!**/node_modules/**"
  ],
  collectCoverage: true,
  coverageReporters: ['text', 'cobertura'],
  coverageDirectory: 'test-reports/',
  setupTestFrameworkScriptFile: '<rootDir>/tests/unit/setupTests.js'
}
