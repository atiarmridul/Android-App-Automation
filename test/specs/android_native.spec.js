

describe('Android Native Feature Test', () => {
  
    xit('Access a Activity directly', async () => {

        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples")

        // await driver.pause(10000); // Pauses for 10 seconds

        const textValue = await $ ('//android.widget.TextView[@text="App/Alert Dialogs"]');

        await expect(textValue).toExist();


      
    })

    xit('Working with Vertical Scrolling', async () => {

        await $('~App').click();
        await $('~Activity').click();
        //vertical scrollto the end, 1 time with speed of 5>> but this is not efficient. 
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')

        //scrollTextIntoView >> this is efficient. 
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();


        // await expect($('~Secure Surfaces')).toExist();

    })

    it('Scrolling Task with date change', async () => {

        
        //access date picker with activity
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.DateWidgets1")

        //get current date
        const currentDate = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]').getText();
        
        //change the date
        await $('~change the date').click();
       
        //scroll to the next month
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        
        //click on the date
        await $('//*[@text="10"]').click(); 

        //accepts the alert popup
        await driver.acceptAlert(); 

        //get new date
        const newDate = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]').getText();
        
        //printing both current date and new date. 
        console.log("Current date is:",currentDate);
        console.log("New date is:",newDate);

        //verify that both dates are not same, means date is changed. 
        await expect(currentDate).not.toEqual(newDate);
    })


})  