const MODULE_ID = "the-tower-of-rime-light";

class Torl extends foundry.applications.sheets.journal.JournalEntrySheet {
  constructor(doc, options) {
    super(doc, options);
    this.options.classes.push("torl");
  }
}
Hooks.on("init", () => {
  foundry.applications.apps.DocumentSheetConfig.registerSheet(JournalEntry, MODULE_ID, Torl, {
    types: ["base"],
    label: "The Tower of Rime Light",
    makeDefault: false,
    canBeDefault: true,
    canConfigure: true
  });
}); //This code is courtesy of u/Freeze014

console.log("Tower of Rime Light loaded");

