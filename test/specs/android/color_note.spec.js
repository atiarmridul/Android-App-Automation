describe('Working on the colornote application. ', () => {
  
    it('Skipping the tutorial', async () => {
       //skipping the tutorial
       driver.pause(3000); 
       (await $('//*[@text="SKIP"]')).click();

    })

    it('Creating a note', async () => {
       
        //clicling the addnote button 
        (await $('//*[@text="Add note"]')).click();
        
        //pause for 3sec
        await driver.pause(3000); 
        (await $('//*[@text="Text"]')).click();
        
        //pause for 3sec
        await driver.pause(3000);
        (await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')).addValue("About MySelf");
        
        //pause for 3sec
        await driver.pause(3000);
        (await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')).addValue("My Name is Md. Atiar Rahman Chowdhury");
        
        //pause for 3sec
        await driver.pause(3000);
        
        //clicking 2 times to save the note. 
        await driver.back();
        await driver.back();
        await driver.back();

        //Validating that note is created.
        const createNote = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/background"]');
        await expect(createNote).toExist();
     })

     it('Deleting a note', async () => {

        
        //clicking the created note. 
        (await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/background"]')).click();
        //pause for 3sec
        await driver.pause(3000);
        //clicking the more (3 dot) menu
        (await $('~More')).click();
        //pause for 3sec
        await driver.pause(3000);
        //clicking the delete option
        (await $('//*[@text="Delete"]')).click();
        await driver.acceptAlert();
        //pause for 3sec
        await driver.pause(3000);

        //Validating that note is deleted.
        await expect(await $('//*[@text="Add note"]')).toExist();
       

    })


})