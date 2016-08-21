import {RouterConfig} from '@angular/router';
import {QuizComponent} from './quiz/quiz.component';
import {TheoryComponent} from './theory/theory.component';

export const routes: RouterConfig = [
    {path: '', component: QuizComponent},
    {path: 'theory', component: TheoryComponent}
];
