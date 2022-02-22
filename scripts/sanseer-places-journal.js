import { SanseerEmptyJournal } from './sanseer-empty-journal.js';

export class SanseerPlacesJournal extends SanseerEmptyJournal {
    constructor(object, options = {}) {
        super(object, options);
    }

    getTemplateData() {
        return '<div class="journal-background"><div class="journal-base"><div class="journal-image-margin-places">' +
            '<img class="journal-image-places" src="modules/sanseer-journals/textures/castle.jpg" width="350" /></div>' +
            '<hr /><div class="journal-header"><h2 class="header-h2">What is this place?</h2></div>' +
            '<div class="journal-content"><p>Paragraph text here: <span class="journal-link">JournalEntry</span></p>' +
            '</div></div></div>';
    }
}