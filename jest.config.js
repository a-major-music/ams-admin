module.exports = {
  rootDir: "./",
  collectCoverageFrom: [
    "<rootDir>/{src,tests}/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/{src,tests}/**/*.test.{js,jsx,ts,tsx}",
    "!<rootDir>/test/**/*",
    "!<rootDir>/src/server.js",
    "!<rootDir>/src/config.js",
  ],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 1,
      lines: 10,
      statements: 10,
    },
  },
  reporters: ["default", ["jest-junit", { outputDirectory: "./results/test" }]],
  testResultsProcessor: "jest-sonar-reporter",
};
