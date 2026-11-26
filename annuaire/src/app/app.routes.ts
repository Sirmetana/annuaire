import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { PersonList } from './components/person-list/person-list';

export const routes: Routes = [
    { path: '', component: PersonList},
    // { path: 'persons/:id', component: PersonDetail },

    { path: '**', component: PersonList},
    // { path: '**', component: NotFound},
];
