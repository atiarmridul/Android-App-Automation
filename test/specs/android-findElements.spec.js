describe('Android Elements Test', () => {
  
  xit('Find element by accessibility id', async () => {
    // find element by accessibility id
    const appOption = await $('~Views');

    // click on element
    await appOption.click();

    // assertion
    const actionBar = await $('~Animation');
    await expect(actionBar).toBeExisting();
    console.log('Assertion Successful');
    
  })
  
  xit('Find element by class name', async () => {
    // find element by class name
    const className = await $('android.widget.TextView');
    console.log(await className.getText());
    await expect(className).toHaveText("API Demos");
    
  })
  
  xit('Find element by Xpath', async () => {

      // find element by Xpath
    await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
      // find element by Resource ID
    await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();
      // find element by Text
    await $('//android.widget.TextView[@text="Command two"]').click();
      // find element by class name
    const testAssertion = await $('android.widget.TextView');
      // assertion
    await expect(testAssertion).toHaveText("You selected: 1 , Command two");

    
  })
  
  xit('Find element by UiAutomator', async () => {
    // find element by UiAutomator
    await $('android=new UiSelector().textContains("Alert")').click();  
  })

  xit('Find multiple elements', async () => {
    
    const expectedList = ['API Demos',"Access'ibility",'Accessibility','Animation','App',
      'Content','Graphics','Media','NFC','OS','Preference','Text','Views'];
    const actualList = []
    const textList = await $$("android.widget.TextView")

    for (const element of textList){
      actualList.push(await element.getText())
    }
    await expect(actualList).toEqual(expectedList);

    
  })

  it.only('Hello', async () => {

      // find element by accessibility id
      const appOption1 = await $('~Views');
      // click on element
      await appOption1.click();

      // find element by Xpath
      const appOption2 = await $('//android.widget.TextView[@content-desc="Auto Complete"]');
      // click on element
      await appOption2.click();

      // find element by text
      const appOption3 = await $('~1. Screen Top');
      // click on element
      await appOption3.click();

      // find element by accessibility id
      const appOption4 = await $('//*[@resource-id="io.appium.android.apis:id/edit"]');

      await driver.pause(10000); // Pauses for 10 seconds

      // click on element
      await appOption4.setValue('Canada');

      await expect(appOption4).toHaveText('Canada');
     
   
    
  })






});