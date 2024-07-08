const { defineConfig } = require("cypress");
const { configureAllureAdapterPlugins } = require('@mmisty/cypress-allure-adapter/plugins');

module.exports = defineConfig({
  retries: 1,
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      configureAllureAdapterPlugins(on, config);
      return config;
    },
  },
});
