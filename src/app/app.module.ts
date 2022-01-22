import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NoteInputComponent } from './note-input/note-input.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NotePreviewComponent } from './note-preview/note-preview.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    SideNavComponent,
    NoteInputComponent,
    NoteListComponent,
    NotePreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
