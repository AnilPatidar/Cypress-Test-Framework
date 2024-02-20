const { defineConfig } = require("cypress");
 
module.exports = defineConfig({
  e2e: {
    baseUrl : 'https://example.cypress.io',
    viewportHeight : 500,
    viewportWidth : 500,
    pageLoadTimeout : 50000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  video: true,
});

 