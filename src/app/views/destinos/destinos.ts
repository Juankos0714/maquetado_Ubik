import { Component } from '@angular/core';
import { Home } from '../home/home';
import { Header } from '../../layouts/header/header';
import { Footer } from '../../layouts/footer/footer';

@Component({
  selector: 'app-destinos',
  imports: [Home, Header, Footer],
  templateUrl: './destinos.html',
  styleUrl: './destinos.css'
})
export class Destinos {

}
