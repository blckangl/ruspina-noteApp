import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Note} from "../shared/interfaces/note";

@Component({
  selector: 'app-note-input',
  templateUrl: './note-input.component.html',
  styleUrls: ['./note-input.component.scss']
})
export class NoteInputComponent implements OnInit,AfterViewInit {

  @Output() onNoteAdded: EventEmitter<Note> = new EventEmitter<any>()
  @ViewChild('noteContentInput') noteContentInput!:ElementRef;
  titleInput: string = '';


  constructor() {
    console.log(this.noteContentInput);
    console.log("constructor called");
  }

  ngOnInit(): void {
    console.log("ngOnInit called");
    console.log(this.noteContentInput);

  }

  addNote() {

    this.onNoteAdded.emit({id: 0, title: this.titleInput, content: this.noteContentInput.nativeElement.value, isDone: false})
    this.titleInput = '';
    this.noteContentInput.nativeElement.value = '';

  }

  checkIfHasNoValue(str: string) {
    if (str.length == 0)
      return true;
    return false
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called");
    console.log(this.noteContentInput);
  }
}
