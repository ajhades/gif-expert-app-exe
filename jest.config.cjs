module.exports = {
  testEnvironment: "jest-environment-jsdom",
  collectCoverage: true,
  coverageReporters: ["lcov", "text"],
  collectCoverageFrom: [
    "src/**/*.{js,jsx}", // Incluye todos los archivos JS/JSX en la carpeta src
    "!src/**/*.test.{js,jsx}", // Excluye archivos de prueba
    "!src/**/index.js" // Excluye archivos index.js si no son relevantes
  ],
  coverageDirectory: "coverage",
  setupFiles: ['whatwg-fetch'],
};
