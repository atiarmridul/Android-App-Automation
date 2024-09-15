# Android Mobile Application Automation

This project is a personal project created with sole purpose of Learning the native mobile application automation.

## Features

- Skipping the tutorial.
- Creating a note.
- Verifying the note is created.
- Deleting the note.
- Verifying the note is deleted.

## Run Locally

Clone the project

```bash {"id":"01J7TWY4RKEYT0E8W8P4QQK3KR"}
  git clone https://github.com/atiarmridul/Android-App-Automation.git
```

Install dependencies

```bash {"id":"01J7TWY4RKEYT0E8W8P7Q1J3BH"}
  npm install
```

Start the test

```bash {"id":"01J7TWY4RKEYT0E8W8P99KNTTW"}
  npm run wdio
```

Show Report 

```bash {"id":"01J7TX353VH5ZPK2XEH83HJW23"}
  npm run show-report
```

## Tech Stack

- WebdriverIo
- Appium
- UiAutomator2 driver.
- Node.js

## Tools Used

- VS Code.
- Android Studio.
- Git.
- Node.js
- Appium Inspector.
- Allure Report.

## Appendix

1. Set JAVA_HOME
2. Set ANDROID_HOME
3. Add your emulator name in "appium:deviceName" in capabilities found in the wdio.conf.js file.
4. Add your emulator platform version in "appium:platformVersion" in capabilities found in the wdio.conf.js file.

```javascript {"id":"01J7TWY4RMT4WSQXJ69TMKPYPV"}
    capabilities: [{
        platformName: "Android",
        "appium:deviceName": "emulator-5554", // add your emulator name here. 
        "appium:platformVersion": "11.0", // add your emulator platform version here. 
        "appium:automationName": "UiAutomator2",
        "appium:app": path.join(process.cwd(), "./app/android/ColorNote+Notepad.apk"),
        "appium:autoGrantPermissions": true

    }],

```
