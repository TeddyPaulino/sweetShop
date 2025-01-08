const { defineConfig } = require("cypress");
const allureWrite = require("@shelex/cypress-allure-plugin/writer");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWrite(on, config)
      return config;
    },
  },
});
