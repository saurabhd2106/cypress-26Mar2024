const { defineConfig } = require("cypress");

module.exports = defineConfig({

  viewportHeight: 640,
  viewportWidth: 1024,

  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
  },

  e2e: {
    baseUrl: "http://localhost:3000/",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    excludeSpecPattern: [ "cypress/e2e/2-advanced-examples/"],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
