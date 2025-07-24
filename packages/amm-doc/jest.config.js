const defaultJestConfig = require("../../jest.config");

module.exports = {
  ...defaultJestConfig,
  preset: "ts-jest",
  setupFilesAfterEnv: ["./jest.setup.js"],
  collectCoverageFrom: [
    ...defaultJestConfig.collectCoverageFrom,
    "!<rootDir>/src/**/index.ts",
  ],
};
