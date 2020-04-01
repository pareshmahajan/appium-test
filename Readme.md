# Pre-requisite:
 - run command `npm install` in the root directory of this project
 - Start appium server using external command prompt and type command `appium --allow-insecure chromedriver_autodownload`
 - Using android studio, start the emulator device
 - use `adb devices` command to get the name of the emulator device. Copy paste it in the deviceName of the capabilities section in the index.js file

# How to run the sample test:
Run test using: `node .\index.js`

# If you see in issue related to compatibilty of chrome browser and chrome driver version then
Run following command in the root directory of this project:
npm install --save appium --chromedriver_version="2.34"
