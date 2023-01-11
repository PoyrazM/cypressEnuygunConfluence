const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 10000,
    videosFolder: 'cypress/videos',
    baseUrl: 'https://www.enuygun.com/',

    setupNodeEvents(on, config) {
      
    },
    specPattern: './cypress/pomTests/*.js'
  },
});
