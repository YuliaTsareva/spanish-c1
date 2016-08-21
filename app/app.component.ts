import {Component} from '@angular/core';
import {TaskService} from './task.service';

@Component({
    selector: 'my-app',
    providers: [TaskService],
    template: `
      <router-outlet></router-outlet>
    `
})
export class AppComponent {
}
