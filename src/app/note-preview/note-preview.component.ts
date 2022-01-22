import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Note} from "../shared/interfaces/note";

@Component({
  selector: 'app-note-preview',
  templateUrl: './note-preview.component.html',
  styleUrls: ['./note-preview.component.scss']
})
export class NotePreviewComponent implements OnInit {

  @Input() note!:Note;

  constructor() { }

  ngOnInit(): void {
  }



}
