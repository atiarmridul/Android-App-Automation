import  addNoteScreen  from "../../screenobjects/android/add-note.screen.js";

describe('Working on the colornote application. ', () => {
  
    it('Skipping the tutorial', async () => {
       //skipping the tutorial
        await addNoteScreen.skipButton.click();

    })

    it('Creating a note', async () => {
        //clicling the  button 
        await addNoteScreen.addNote.click();  
        //selecting text type
        await addNoteScreen.selectText.click();  
        //set the note title 
        await addNoteScreen.titleField.addValue("About MySelf"); 
        //set the note description
        await addNoteScreen.descriptionField.addValue("My Name is Md. Atiar Rahman Chowdhury");  
        //save the note.and 1 time to return to main activity 
        await addNoteScreen.saveNote();
        // 1 time to return to main activity 
        await driver.back();
        //Validating that note is created.
        await expect(addNoteScreen.createNote).toExist();
     })

     it('Deleting a note', async () => {
        //clicking the created note. 
        await addNoteScreen.createNote.click();
        //clicking the more (3 dot) menu
        await addNoteScreen.menuItem.click();
        //clicking the delete option
        await addNoteScreen.deleteOption.click();
        //confirming the delete
        await driver.acceptAlert();
        //Validating that note is deleted.
        await expect(addNoteScreen.addNote).toExist();
       
    })

})