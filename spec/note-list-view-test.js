describe("NoteListView", () => {

  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);

  it("turns notes into html", () => {
    expect(noteListView.listHTML()==="").toBe(true);
    noteList.createNote("Favourite food: pesto");
    expect(noteListView.listHTML()==="<ul><li><div>Favourite food: pesto</div></li></ul>").toBe(true);
    noteList.createNote("Favourite drink: seltzer");
    expect(noteListView.listHTML()==="<ul><li><div>Favourite food: pesto</div></li></ul><ul><li><div>Favourite drink: seltzer</div></li></ul>").toBe(true);
  });


});