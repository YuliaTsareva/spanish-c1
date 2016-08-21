import {Component, Input} from '@angular/core';

@Component({
    selector: 'my-progress',
    template: require('./progress.template.html'),
    styles: [ require('./progress.css') ]
})
export class ProgressComponent {
    @Input() max: number;
    @Input() value: number;

    getPercentage() {
        return 100 * this.value / this.max + '%';
    }
}
