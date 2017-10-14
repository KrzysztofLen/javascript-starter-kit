// eslint-disable-line quotes
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const CHROME_CANARY = "/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary";

module.exports = {
  "src_folders" : ["tests/e2e/specs"],
  "output_folder" : "tests/e2e/reports",
  "custom_commands_path" : "",
  "custom_assertions_path" : "",
  "page_objects_path" : "",
  "globals_path" : "",

  "selenium" : {
    "start_process" : true,
    "host": "127.0.0.1",
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : require('chromedriver').path,
      "webdriver.gecko.driver" : require('geckodriver').path
    }
  },

  "test_settings" : {
    "default" : {
      "launch_url" : "http://localhost:3002/",
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "silent": true,
      "screenshots" : {
        "enabled" : true,
        "path" : "./tests/e2e/reports/screenshots/"
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true,
        "marionette": true,
        "acceptInsecureCerts": true
      }
    },

    "chrome" : {
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true,
        "marionette": true,
        "chromeOptions": {
          "args": [
            "--headless"
          ],
          "binary": CHROME
        }
      }
    },

    "firefox": {
      "desiredCapabilities": {
        "browserName": 'firefox',
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },

    "edge" : {
      "desiredCapabilities": {
        "browserName": "MicrosoftEdge"
      }
    }
  }
};
