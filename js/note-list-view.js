function NoteListView(noteList) {
  this.noteList = noteList
};

NoteListView.prototype = (function() {
  function listHTML() {
    let newarr = []
    for(var i = 0; i < this.noteList.storedNotes.length; i++) {
      newarr.push(`<ul><li><div>${this.noteList.storedNotes[i].text}</div></li></ul>`);
    }
    return newarr.join("")
  };

  return {
    listHTML
  };
})();
