import { ImageJournal } from './image-journal.js';

class SanseerJournal extends JournalSheet {
    static get defaultOptions() {
    const options = super.defaultOptions;
    options.classes.push('sanseer-journals');
    return options;
  }
}

Hooks.on("init", (documentTypes) => {
console.log("Sanseer Journals | Registering the module's TinyMCE Styles.");

libWrapper.register('sanseer-journals', 'JournalSheet.prototype.activateEditor', function(wrapped, name, options={}, ...args) {
    if (!options.style_formats) 
    {
        options.style_formats = [
            {
                title: "Sanseer Journal",
                items: [
                    {
                        title: "Secret",
                        block: 'section',
                        classes: 'secret',
                        wrapper: true
                    }
                ]
            }
        ];
    }
    options.style_formats.push(
        {
            title: game.i18n.localize("sanseer-journals.StyleSection"),
            items: [
                {
                    title: game.i18n.localize("sanseer-journals.DropCap"),
                    inline: 'span',
                    classes: 'drop-cap' 
                },
                {
                    title: game.i18n.localize("sanseer-journals.SimpleBlock"),
                    block: 'section',
                    classes: 'simple-block',
                    wrapper: true
                },
                {
                    title: game.i18n.localize("sanseer-journals.SimpleBlockFloat"),
                    block: 'section',
                    classes: 'simple-block-float',
                    wrapper: true
                },
                {
                    title: game.i18n.localize("sanseer-journals.RidgedBlock"),
                    block: 'section',
                    classes: 'ridged-block',
                    wrapper: true
                },
                {
                    title: game.i18n.localize("sanseer-journals.RidgedBlockFloat"),
                    block: 'section',
                    classes: 'ridged-block-float',
                    wrapper: true
                }
            ]
        }
    );
  return wrapped(name, options={}, ...args);
}, 'WRAPPER');

console.log("Sanseer Journals | Registering the module's sheets.");

/*CUSTOMIZE
 * Here, register your sheet so it shows up properly in the dropdown, just change
 * for your sheet name and you're good to go
 */
Journal.registerSheet("journals", SanseerJournal, {
	label: game.i18n.localize("sanseer-journals.SanseerJournal"),
	types: ["base"],
	makeDefault: false
});

EntitySheetConfig.updateDefaultSheets(game.settings.get("core", "sheetClasses"));

console.log("Sanseer Journals | Ready.")
});