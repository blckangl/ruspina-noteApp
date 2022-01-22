import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appCheckedNote]'
})
export class CheckedNoteDirective {

  @Input() appCheckedNote! : any;

  constructor(el: ElementRef) {
    console.log("isDone checked",this.appCheckedNote);

    console.log(el.nativeElement.innerHTML)

  }

}
