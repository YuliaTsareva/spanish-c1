import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
    selector: '[autofocus]'
})
export class Autofocus implements OnInit {
    constructor(public el: ElementRef) {
    }

    ngOnInit() {
        this.el.nativeElement.focus();
    }
}
