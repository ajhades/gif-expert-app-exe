module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFiles: ["./jest.setup.js"],
  collectCoverage: true,
  coverageReporters: ["lcov", "text"],
  coverageDirectory: "coverage",
  setupFiles: ['whatwg-fetch','<rootDir>/jest.setup.js'],
};
