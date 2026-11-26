import { Routes } from '@angular/router';
import { Home } from './components/home/home';

export const routes: Routes = [
    { path: '', component: Home},
    // { path: 'personnes', component: PersonList },
    // { path: 'persons/:id', component: PersonDetail },

    { path: '**', component: Home},
    // { path: '**', component: NotFound},
];
