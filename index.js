const wdio = require("webdriverio");
const assert = require("assert");
const opts = {
  port: 4723,
  capabilities: {
    platformName: "Android",
    platformVersion: "10.0",
    deviceName: "emulator-5554",
    browserName: "Chrome",
    app: "",
    // appPackage: "io.appium.android.apis",
    // appActivity: ".view.TextFields",
    automationName: "UiAutomator2"
  }
};
async function main () {
  const browser = await wdio.remote(opts);
  await browser.url('https://webdriver.io');
  const title = await browser.getTitle();
  assert.strictEqual(title, 'WebdriverIO · Next-gen browser automation test framework for Node.js');
  // await browser.closeWindow();
  // await browser.closeApp();
  await browser.deleteSession
  await browser.deleteSession();

}
main();