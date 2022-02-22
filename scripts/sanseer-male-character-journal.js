import { SanseerEmptyJournal } from './sanseer-empty-journal.js';

export class SanseerMaleCharacterJournal extends SanseerEmptyJournal {
    constructor(object, options = {}) {
        super(object, options);
    }

    getTemplateData() {
        return '<div class="journal-base"><div class="journal-image-margin">' +
            '<img class="journal-image" src="modules/sanseer-journals/textures/male.jpg" ' +
            'alt="" width="150" height="150" /></div><hr /><div class="journal-header">' +
            '<h2 class="header-h2">Who is this man?</h2></div><div class="journal-content">' +
            '<p>Paragraph text here: <span class="journal-link">JournalEntry</span></p>' +
            '</div></div>';
    }
}