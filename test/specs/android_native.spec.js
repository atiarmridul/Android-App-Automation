

describe('Android Native Feature Test', () => {
  
    it('Access a Activity directly', async () => {

        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples")

        // await driver.pause(10000); // Pauses for 10 seconds

        const textValue = await $ ('//android.widget.TextView[@text="App/Alert Dialogs"]');

        await expect(textValue).toExist();


      
    })
})  