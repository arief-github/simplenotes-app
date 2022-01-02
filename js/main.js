import App from "./App.js";
import NotesAPI from "./NotesAPI.js";
// import NotesView from "./NotesView.js";

// Read API
// console.log(NotesAPI.getAllNotes());
// Put API
// NotesAPI.saveNote({
// 	id: 671,
// 	title: "Javascript Project",
// 	body: "I follow dcode tutorial",
// });
// Delete API
// NotesAPI.deleteNote(57);

// const app = document.getElementById("app");
// const view = new NotesView(app, {
// 	onNoteAdd() {
// 		console.log("Ayo tambahkan note!");
// 	},
// 	onNoteSelect(id) {
// 		console.log("Note Selected: " + id);
// 	},
// 	onNoteDelete(id) {
// 		console.log("Note Deleted: " + id);
// 	},
// 	onNoteEdit(newTitle, newBody) {
// 		console.log(newTitle);
// 		console.log(newBody);
// 	},
// });

// const notes = NotesAPI.getAllNotes();

// view.updateNoteList(NotesAPI.getAllNotes());
// view.updateActiveNote(notes[0]);

const root = document.getElementById("app");
const app = new App(root);