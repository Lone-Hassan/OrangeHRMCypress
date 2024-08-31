const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    video: true, // Ensure video recording is enabled
    videoUploadOnPasses: false, // Ensures that videos are saved even if tests pass
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'custom-title',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    specPattern:'cypress/integration/Tests/*.js',
    //screenshotOnRunFailure: true, // Take screenshots on test failure
    //screenshotsFolder: 'cypress/screenshots', // Directory to save screenshots
    
  },
});
