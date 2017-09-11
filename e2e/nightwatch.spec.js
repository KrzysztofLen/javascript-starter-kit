const TARGET_PAGE_URL = 'http://localhost:3002';
// REMEMBER TO ALWAYS RUN APP AND THEN SPECS <=========
module.exports = {
  'Is header contains correct text?': (browser) => {
    browser.url(TARGET_PAGE_URL);
    browser.waitForElementVisible('body', 3000);
    browser.assert.containsText('h1', 'Bigger Test');
    browser.end();
  },

  'Is main part of app contains proper number of elements?': (browser) => {
    browser.url(TARGET_PAGE_URL);
    browser.waitForElementVisible('body', 3000);
    browser.elements('css selector', '#menu li', (result) => {
      if (result.value.length !== 7) {
        browser.assert.fail('Number of elements is not correct');
      }
    });
    browser.end();
  },

  'Capture screenshot to see manually that page looks correct': (browser) => {
    browser.url(TARGET_PAGE_URL);
    browser.waitForElementVisible('body', 1000);
    let screenshot = './e2e/screenshots/screenshot-' + new Date().toISOString().slice(0, -5) + '.png';
    let filename = screenshot.replace(/:/g, "-");
    browser.saveScreenshot(filename);
    browser.end();
  },

  'Check text paragraph': (browser) => {
    browser.url(TARGET_PAGE_URL);
    browser.waitForElementVisible('body', 3000);
    browser.expect.element('.paragraph').text.to.equal('Lorem ipsum dolor sit amet');
    browser.end();
  }
};
