import { $, $$, driver, expect } from '@wdio/globals';


class addNoteScreen{

get skipButton(){
    return $('//*[@text="SKIP"]');
}

get addNote(){
    return $('//*[@text="Add note"]');
}

get selectText(){
    return $('//*[@text="Text"]');
}

get titleField(){
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
}

get descriptionField(){
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
}
get createNote(){
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/background"]');
}

get menuItem(){
    return $('~More');
}

get deleteOption(){
    return $('//*[@text="Delete"]');
}




async saveNote(){
    await driver.back();
    await driver.back();
}


}

export default new addNoteScreen();