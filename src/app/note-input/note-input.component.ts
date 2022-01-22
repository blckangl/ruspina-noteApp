import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Note} from "../shared/interfaces/note";

@Component({
  selector: 'app-note-input',
  templateUrl: './note-input.component.html',
  styleUrls: ['./note-input.component.scss']
})
export class NoteInputComponent implements OnInit {

  @Output() onNoteAdded: EventEmitter<Note> = new EventEmitter<any>()



  constructor() {
  }

  ngOnInit(): void {
  }

  addNote(title:string,content:string) {

    this.onNoteAdded.emit({id: 0, title: title, content:content, isDone: false})
  }

}
