module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testMatch: [
    'tests/unit/**/*.test.js',
  ],
  collectCoverageFrom: [
    'modern-manual-site/app.js',
    'modern-manual-site/lib/**/*.js',
    '!modern-manual-site/**/*.test.js',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'tests/',
  ],
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
};
