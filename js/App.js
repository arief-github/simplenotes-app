import NotesAPI from "./NotesAPI.js";
import NotesView  from "./NotesView.js";


export default class App{
    constructor(root){
        this.notes = [];
        this.activeNote = null;
        this.view = new NotesView(root, this._handlers());

        this._refreshNotes();
    }

    
    _refreshNotes(){
        const notes = NotesAPI.getAllNotes();
        this._setNotes(notes);
        if(notes.length > 0){
            this._setActiveNote(notes[0]);
        }
    }

    _setNotes(notes){
        this.notes = notes;
        this.view.updateNoteList(notes);
        this.view.updateNotePreviewVisbility(notes.length > 0);
    }

    _setActiveNote(note){
        this.activeNote = note;
        this.view.updateActiveNote(note);
    }

    _handlers(){
        return {
            onNoteSelect: noteId => {
                // console.log("Note selected: "+noteId);
                const selectedNote = this.notes.find(note => note.id == noteId);
                this._setActiveNote(selectedNote);

            },
            onNoteAdd: () => {
                // console.log("Note Add");
                const newNote = {
                    title: "New note",
                    body: "Take note..."
                }
                NotesAPI.saveNote(newNote);
                this._refreshNotes();
            },
            onNoteEdit: (title, body) => {
                // console.log(title, body);
                NotesAPI.saveNote({
                    id: this.activeNote.id,
                    title,
                    body
                })
                this._refreshNotes();
            },
            onNoteDelete: noteId => {
                // console.log("Note Deleted: "+noteId);
                NotesAPI.deleteNote(noteId);
                this._refreshNotes();
            }

        };
    }
}

