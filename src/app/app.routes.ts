import { Routes } from '@angular/router';
import { Profile } from "./views/profile/profile";
import { Home } from './views/home/home';
import { Destinos } from './views/destinos/destinos';
import { Offers } from './views/offers/offers';

export const routes: Routes = [
    {path: '',component:Home},
    {path: 'profile', component: Profile},
    {path: 'destinations', component: Destinos},
    {path: 'offers', component: Offers},
];
