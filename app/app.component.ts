import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {TaskService} from './task.service';

@Component({
    selector: 'my-app',
    directives: [RouterOutlet, ROUTER_DIRECTIVES],
    providers: [TaskService],
    template: `
      <router-outlet></router-outlet>
    `
})
export class AppComponent {
}
