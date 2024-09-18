const { defineConfig } = require("cypress");

const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //this.watchForFileChanges = false;

      on('task', {downloadFile}),

          {
            "compilerOptions": {
              "types": ["cypress", "node", "cypress-real-events"]
            }
          }

    },
  },
});
