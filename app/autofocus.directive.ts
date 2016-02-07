import {Directive, ElementRef} from 'angular2/core';

@Directive({
    selector: '[autofocus]'
})
export class Autofocus {
    constructor(public el: ElementRef) {
        this.el.nativeElement.focus();
    }
}
