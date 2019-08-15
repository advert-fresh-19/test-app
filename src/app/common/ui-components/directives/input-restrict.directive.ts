import {Directive, HostListener, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[inputRestrict]'
})
export class InputRestrictDirective {

  public regexStr: string;
  @Input() inputRestrict;

  constructor(private el: ElementRef) {
  }


  @HostListener('keypress', ['$event']) onKeyPress(event) {
    this.regexStr = this.inputRestrict;
    return new RegExp(this.regexStr).test(event.key);
  }

  @HostListener('paste', ['$event']) blockPaste(event: KeyboardEvent) {
    this.validateFields(event);
  }

  validateFields(event) {
    setTimeout(() => {
      this.regexStr = this.inputRestrict;
      this.el.nativeElement.value = this.el.nativeElement.value.replace(/[^A-Za-z ]/g, '').replace(/\s/g, '');
      event.preventDefault();
    }, 100);
  }
}
