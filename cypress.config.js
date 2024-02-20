const { defineConfig } = require("cypress");
 
module.exports = defineConfig({
  e2e: {
    baseUrl : 'https://example.cypress.io',
    viewportHeight : 800,
    viewportWidth : 1200,
    pageLoadTimeout : 50000,
    experimentalStudio : true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  video: true,
});

 