import {Component} from '@angular/core';
import {Note} from "./shared/interfaces/note";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'noteApllication';
  noteList: Array<Note> = new Array<Note>();


  constructor() {
    this.noteList.push(
      {id: 0, title: 'note 1', content: 'note 1 content', isDone: false},
      {id: 1, title: 'note 2', content: 'note 2 content', isDone: false},
      {id: 2, title: 'note 3', content: 'note 3 content', isDone: true},
      {id: 3, title: 'note 4', content: 'note 4 content', isDone: false},
    )
  }

  addNote(event: Note) {
    this.noteList.push(event);

  }
}
