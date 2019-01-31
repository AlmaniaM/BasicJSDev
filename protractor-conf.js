exports.config = {
    seleniumServerJar: 'node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.59.jar',
    chromeDriver: 'node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.45.exe',

    specs: [
        'e2e/*.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    // url where your app is running, relative URLs are prepending with this URL
    baseUrl: 'http://localhost:3000/',

    // testing framework, jasmine is the default
    framework: 'jasmine',

    onPrepare: function() {
        browser.waitForAngularEnabled(false);
    }
};