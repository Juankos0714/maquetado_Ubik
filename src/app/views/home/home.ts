import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  searchLocation: string = '';
  searchDate: string = '';
  searchFilters: string = '';

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

  
  formatPrice(price: number): string {
    return `$ ${price.toLocaleString('es-CO')}`;
  }
}