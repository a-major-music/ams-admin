const defaultJestConfig = require("./jest.config");

module.exports = {
  ...defaultJestConfig,
  testMatch: ["**/?(*.)+(e2e-spec|e2e-test).[jt]s?(x)"],
};
