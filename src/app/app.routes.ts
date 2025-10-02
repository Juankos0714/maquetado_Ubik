import { Routes } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Home } from './views/home/home';


export const routes: Routes = [
    {path: '',component:Home},
    {path:'header',component:Header},
    {path:'footer',component:Footer}

];
