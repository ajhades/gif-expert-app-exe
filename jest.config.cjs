module.exports = {
  testEnvironment: "jest-environment-jsdom",
  collectCoverage: true,
  coverageReporters: ["lcov", "text"],
  coverageDirectory: "coverage",
  setupFiles: ['whatwg-fetch','<rootDir>/jest.setup.js'],
};
