import {Component, Input} from 'angular2/core';

@Component({
    selector: 'my-progress',
    template: `
        <div class="progress">
          <div class="progress-bar" [ngStyle]="{width: getPercentage()}">
          </div>
        </div>`,
    styles: [`
        .progress {
            background: #ecf0f1;
            //width: 100%;
            height: 7px;
            border-radius: 0;
            box-shadow: none;
            margin: 0;
        }

        .progress-bar {
            background-color: #1abc9c;
        }

        @media (max-width: 767px) {
            .progress {
                height: 15px;
            }
        }`]
})
export class ProgressComponent {
    @Input() max: number;
    @Input() value: number;

    private getPercentage() {
        return 100 * this.value / this.max + '%';
    }
}
