import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NoteInputComponent } from './note-input/note-input.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NotePreviewComponent } from './note-preview/note-preview.component';
import {FormsModule} from "@angular/forms";
import { CheckedNoteDirective } from './checked-note.directive';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    SideNavComponent,
    NoteInputComponent,
    NoteListComponent,
    NotePreviewComponent,
    CheckedNoteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
