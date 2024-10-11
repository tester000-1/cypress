const {defineConfig} = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');

import {allureCypress} from "allure-cypress/reporter";

module.exports = defineConfig({

    e2e: {
        experimentalOriginDependencies: true,
        setupNodeEvents(on, config) {
                on('task', {downloadFile}),
                {
                    "compilerOptions": {
                        "types": ["cypress", "node", "cypress-real-events"]
                    }
                }

            allureCypress(on, config, {
                resultsDir: "allure-results",
            });
            return config;
        }
    }

});
