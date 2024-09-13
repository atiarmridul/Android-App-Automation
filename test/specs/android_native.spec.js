

describe('Android Native Feature Test', () => {
  
    xit('Access a Activity directly', async () => {

        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples")

        // await driver.pause(10000); // Pauses for 10 seconds

        const textValue = await $ ('//android.widget.TextView[@text="App/Alert Dialogs"]');

        await expect(textValue).toExist();


      
    })

    it('Working with Vertical Scrolling', async () => {

        await $('~App').click();
        await $('~Activity').click();
        //vertical scrollto the end, 1 time with speed of 5>> but this is not efficient. 
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')

        //scrollTextIntoView >> this is efficient. 
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();


        // await expect($('~Secure Surfaces')).toExist();

    })



})  