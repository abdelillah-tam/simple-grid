import { Routes } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { AddNoteComponent } from './add-note/add-note.component';

export const routes: Routes = [
    { title: 'Add Note', path: 'addnote', component: AddNoteComponent },
    { title: 'Home', path: '', component: NotesComponent}
];
