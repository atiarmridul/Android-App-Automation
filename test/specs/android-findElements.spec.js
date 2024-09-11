describe('Android Elements Test', () => {
  
  it('Find element by accessibility id', async () => {
    // find element by accessibility id
    const appOption = await $('~App');

    // click on element
    await appOption.click();

    // assertion
    const actionBar = await $('~Activity');
    await expect(actionBar).toBeExisting();
    console.log('Assertion Successful');
    
  })
  
  it.only('Find element by class name', async () => {
    // find element by class name
    const className = await $('android.widget.TextView');
    console.log(await className.getText());
    await expect(className).toHaveText("API Demos");
    
  })


});