import {Component, Input} from 'angular2/core';

@Component({
    selector: 'my-progress',
    template: `
        <div class="progress">
          <div class="progress-bar" [ngStyle]="{width: getPercentage()}">
          </div>
        </div>`,
    styles: [ require('./progress.css') ]
})
export class ProgressComponent {
    @Input() max: number;
    @Input() value: number;

    private getPercentage() {
        return 100 * this.value / this.max + '%';
    }
}
