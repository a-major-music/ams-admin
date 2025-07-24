const { resolve } = require("path");

require("dotenv").config({
  path: resolve(__dirname, ".env.test"),
});

require("dotenv").config({
  path: resolve(__dirname, `.env.test-${process.env.TEST_ENV || "local"}`),
});
