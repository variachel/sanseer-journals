export class SanseerEmptyJournal extends JournalSheet {

    constructor(object, options = {}) {
        super(object, options);
        this._sheetMode = this.options.sheetMode || this._inferDefaultMode();
        this._textPos = null;

        this.handleData();
    }

    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["sheet", "journal-sheet", "sanseer-journals"],
            width: 720,
            height: 800,
            resizable: true,
            closeOnSubmit: false,
            submitOnClose: true,
            viewPermission: CONST.DOCUMENT_PERMISSION_LEVELS.NONE
        });
    }

    get template() {
        if (this._sheetMode === "image") return ImagePopout.defaultOptions.template;
        return "modules/sanseer-journals/templates/sanseer-journal-template.html";
    }

    get title() {
        return this.object.permission ? this.object.name : "";
    }

    handleData() {
        if (this.object.data.content) {
            return;
        }
        this.object.data.content = this.getTemplateData();
    }


    getTemplateData() {
        return '';
    }
}