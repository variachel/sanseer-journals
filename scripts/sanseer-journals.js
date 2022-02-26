import { SanseerEmptyJournal } from './sanseer-empty-journal.js';
import { SanseerFemaleCharacterJournal } from './sanseer-female-character-journal.js';
import { SanseerMaleCharacterJournal } from './sanseer-male-character-journal.js';
import { SanseerPlacesJournal } from './sanseer-places-journal.js';
import { SanseerObjectsJournal } from './sanseer-objects-journal.js';
import { log } from './util.js';


Hooks.on("init", (documentTypes) => {
    libWrapper.register('sanseer-journals', 'JournalSheet.prototype.activateEditor', function(wrapped, name, options = {}, ...args) {
        if (!options.style_formats) {
            options.style_formats = [{
                title: "Sanseer Journal",
                items: [{
                    title: "Secret",
                    block: 'section',
                    classes: 'secret',
                    wrapper: true
                }]
            }];
        }

        options.style_formats.push({
            title: game.i18n.localize("sanseer-journals.JournalStyles"),
            items: [{
                    title: game.i18n.localize("sanseer-journals.Base"),
                    block: 'div',
                    classes: "journal-base",
                    wrapper: true
                },
                {
                    title: game.i18n.localize("sanseer-journals.Header"),
                    block: 'div',
                    classes: "journal-header",
                    wrapper: true
                },
                {
                    title: game.i18n.localize("sanseer-journals.Content"),
                    block: 'div',
                    classes: "journal-content",
                    wrapper: true
                },

                {
                    title: game.i18n.localize("sanseer-journals.ImageWrapper"),
                    block: 'div',
                    classes: "journal-image-margin",
                    wrapper: true
                },
                {
                    title: game.i18n.localize("sanseer-journals.CharacterImage"),
                    block: 'img',
                    classes: "journal-image",
                    wrapper: false
                },
                {
                    title: game.i18n.localize("sanseer-journals.CircleImage"),
                    block: 'img',
                    classes: "journal-image-circle",
                    wrapper: false
                },
                {
                    title: game.i18n.localize("sanseer-journals.HeaderH2"),
                    block: 'h2',
                    classes: "header-h2",
                    wrapper: false
                },
                {
                    title: game.i18n.localize("sanseer-journals.JournalLink"),
                    block: 'span',
                    classes: "journal-link",
                    wrapper: false
                },
                {
                    title: game.i18n.localize("sanseer-journals.4ColGrid"),
                    block: 'div',
                    classes: "grid-container",
                    wrapper: false
                },
                {
                    title: game.i18n.localize("sanseer-journals.Information"),
                    block: 'div',
                    classes: "highlight information",
                    wrapper: false
                },
                {
                    title: game.i18n.localize("sanseer-journals.Warning"),
                    block: 'div',
                    classes: "highlight warning",
                    wrapper: false
                },
                {
                    title: game.i18n.localize("sanseer-journals.Error"),
                    block: 'div',
                    classes: "highlight error",
                    wrapper: false
                },
                {
                    title: game.i18n.localize("sanseer-journals.Dark"),
                    block: 'div',
                    classes: "highlight dark",
                    wrapper: false
                },
            ]

        });

        return wrapped(name, options = {}, ...args);
    }, 'WRAPPER');

    // register the journals
    Journal.registerSheet("journals", SanseerEmptyJournal, {
        label: game.i18n.localize("sanseer-journals.SanseerEmptyJournal"),
        types: ["base"],
        makeDefault: false
    });

    Journal.registerSheet("journals", SanseerFemaleCharacterJournal, {
        label: game.i18n.localize("sanseer-journals.SanseerFemaleCharacterJournal"),
        types: ["base"],
        makeDefault: false
    });

    Journal.registerSheet("journals", SanseerMaleCharacterJournal, {
        label: game.i18n.localize("sanseer-journals.SanseerMaleCharacterJournal"),
        types: ["base"],
        makeDefault: false
    });

    Journal.registerSheet("journals", SanseerPlacesJournal, {
        label: game.i18n.localize("sanseer-journals.SanseerPlacesJournal"),
        types: ["base"],
        makeDefault: false
    });

    Journal.registerSheet("journals", SanseerObjectsJournal, {
        label: game.i18n.localize("sanseer-journals.SanseerObjectsJournal"),
        types: ["base"],
        makeDefault: false
    });

    /*
        Error occurs without the game.ready check, however, the game is NOT ready at the point of calling the updateDefaultSheets.
        The following code therefore is placing an empty object in the sheets. Which, in fact, the call to Journal.registerSheet() already does
    */
    const settings = game.ready ? game.settings.get("core", "sheetClasses") : {};
    DocumentSheetConfig.updateDefaultSheets(settings);

    log("Sanseer Journals v1.3.0 | Ready.");
});