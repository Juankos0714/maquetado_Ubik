import { Routes } from '@angular/router';
import { Profile } from "./views/profile/profile";
import { Home } from './views/home/home';
import { Destinos } from './views/destinos/destinos';
import { Explora } from './views/explora/explora';

export const routes: Routes = [
    {path: '',component:Home},
    {path: 'profile', component: Profile},
    {path: 'destinations', component: Destinos}, // redirect to home for unknown paths
    {path: 'explora', component: Explora}
];
