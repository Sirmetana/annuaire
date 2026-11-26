import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { PersonList } from './components/person-list/person-list';
import { PersonDetail } from './components/person-detail/person-detail';

export const routes: Routes = [
    { path: '', component: PersonList},
    { path: 'personnes/:id', component: PersonDetail },

    { path: '**', component: PersonList},
    // { path: '**', component: NotFound},
];
