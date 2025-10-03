import { CommonModule } from '@angular/common';
import { Component, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { Banner } from '../../components/banner/banner';

interface Motel {
  id: number;
  name: string;
  location: string;
  amenities: string[];
  price: number;
  image: string;
}

interface Destination {
  id: number;
  name: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-header',
  imports: [RouterModule, FormsModule, CommonModule, Banner],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  // items del menú como signal
  items = signal([
    { label: 'Inicio', route: '/' },
    { label: 'Explorar', route: '/explora' },
    { label: 'Destinos', route: '/destinations' },
    { label: 'Ofertas', route: '/offers' },
    { label: 'Perfil', route: '/profile' },
  ]);

  // ahora currentUrl es un signal
  currentUrl = signal<string>('/');

  constructor(private router: Router) {
    // Inicializamos con la URL actual normalizada
    this.currentUrl.set(this.normalizeUrl(this.router.url));

    // Escuchamos los cambios de navegación y actualizamos el signal
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.currentUrl.set(this.normalizeUrl(event.urlAfterRedirects));
    });
  }

  private normalizeUrl(url: string): string {
    let clean = url.split('?')[0].replace(/\/$/, '');
    return clean === '' ? '/' : clean;
  }

  // Variables de búsqueda
  searchLocation: string = '';
  searchDate: string = '';
  searchFilters: string = '';

  // Datos de moteles
  moteles: Motel[] = [
    {
      id: 1,
      name: 'LUXURY SUITE',
      location: 'Armenia',
      amenities: ['Bar', 'jacuzzi', 'Tv'],
      price: 100000,
      image: 'https://res.cloudinary.com/dm4h2avio/image/upload/v1759339321/pexels-leonardo-aquino-246345118-28174032_z8nfej.jpg'
    },
    {
      id: 2,
      name: 'ROMANTIC PALACE',
      location: 'Armenia',
      amenities: ['Bar', 'jacuzzi', 'Tv'],
      price: 100000,
      image: 'https://res.cloudinary.com/dm4h2avio/image/upload/v1759339297/pexels-pixabay-271643_mro3ye.jpg'
    },
    {
      id: 3,
      name: 'DELUXE MOMENTS',
      location: 'Armenia',
      amenities: ['Bar', 'jacuzzi', 'Tv'],
      price: 100000,
      image: 'https://res.cloudinary.com/dm4h2avio/image/upload/v1759339311/pexels-lazarus-ziridis-351891426-32640524_tebu3t.jpg'
    },
    {
      id: 4,
      name: 'THE BIG SUITE',
      location: 'Armenia',
      amenities: ['Bar', 'jacuzzi', 'Tv'],
      price: 100000,
      image: 'https://res.cloudinary.com/dm4h2avio/image/upload/v1759339300/pexels-sa72-32753834_rwbcnj.jpg'
    }
  ];

  // Datos de destinos
  destinos: Destination[] = [
    {
      id: 1,
      name: 'SALENTO (QUINDÍO)',
      description: 'Naturaleza + privacidad',
      image: 'https://res.cloudinary.com/dm4h2avio/image/upload/v1759339305/pexels-haider-syed-719913841-18651506_vgr06u.jpg'
    },
    {
      id: 2,
      name: 'SANTA ROSA (RISARALDA)',
      description: 'Termales + moteles románticos',
      image: 'https://res.cloudinary.com/dm4h2avio/image/upload/v1759339295/pexels-polina-semernina-497042591-22469110_v8v56x.jpg'
    },
    {
      id: 3,
      name: 'LA TEBAIDA (QUINDÍO)',
      description: 'Cerca a Armenia + muy discreto',
      image: 'https://res.cloudinary.com/dm4h2avio/image/upload/v1759339292/635884631_yegxal.jpg'
    }
  ];

  buscarEspacio(): void {
    console.log('Buscando:', {
      location: this.searchLocation,
      date: this.searchDate,
      filters: this.searchFilters
    });
  }
}
