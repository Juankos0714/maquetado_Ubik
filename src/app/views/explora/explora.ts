import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-explora',
  imports: [CommonModule],
  templateUrl: './explora.html',
  styleUrl: './explora.css'
})
export class Explora {

  moteles = [
    {
      id: 1,
      icono: '🏰',
      nombre: 'ROMANTIC PALACE',
      ubicacion: '📍 Armenia, Quindío',
      rating: 4.8,
      resenas: 124,
      features: ['🛁 Jacuzzi privado', '🚗 Parqueadero', '📺 TV Smart', '🍷 Bar incluido'],
      descripcion: 'Este establecimiento ofrece espacio al aire libre, balcón con jacuzzi y spa privado. Perfecto para una escapada romántica con máxima privacidad y lujo.',
      precio: 100.000,
      periodo: 'por 3 horas',
      favorito: false,
      tipo: 'suite',
      ciudad: 'armenia'
    },
    {
      id: 2,
      icono: '✨',
      nombre: 'DELUXE MOMENTS',
      ubicacion: '📍 Armenia, Quindío',
      rating: 4.9,
      resenas: 89,
      features: ['🛁 Jacuzzi', '🌟 Suite de lujo', '❄️ Aire acondicionado', '🎵 Audio premium'],
      descripcion: 'Experiencia exclusiva con decoración moderna y amenidades de primera clase. Ideal para celebraciones especiales y momentos únicos.',
      precio: 120.000,
      periodo: 'por 3 horas',
      favorito: false,
      tipo: 'suite',
      ciudad: 'armenia'
    },
    {
      id: 3,
      icono: '🌟',
      nombre: 'THEBIG SUITE',
      ubicacion: '📍 Armenia, Quindío',
      rating: 4.7,
      resenas: 156,
      features: ['🏊 Jacuzzi XL', '🍽️ Minibar', '🎮 Gaming zone', '🌳 Vista panorámica'],
      descripcion: 'Amplia suite con espacio para relajarse y disfrutar. Equipada con las mejores comodidades y un ambiente acogedor para tu estadía.',
      precio: 95.000,
      periodo: 'por 3 horas',
      favorito: false,
      tipo: 'suite',
      ciudad: 'armenia'
    },
    {
      id: 4,
      icono: '🛏️',
      nombre: 'LUXURY SUITE',
      ubicacion: '📍 Armenia, Quindío',
      rating: 4.6,
      resenas: 98,
      features: ['🛁 Jacuzzi doble', '🔒 Entrada privada', '📺 Netflix', '☕ Servicio a la habitación'],
      descripcion: 'Habitación elegante con todos los detalles pensados para tu comodidad. Ambiente romántico y servicio de primera calidad garantizado.',
      precio: 110.000,
      periodo: 'por 3 horas',
      favorito: false,
      tipo: 'suite',
      ciudad: 'armenia'
    },
    {
      id: 5,
      icono: '💎',
      nombre: 'DIAMOND PARADISE',
      ubicacion: '📍 Armenia, Quindío',
      rating: 5.0,
      resenas: 67,
      features: ['💆 Spa completo', '🥂 Champagne cortesía', '🎭 Decoración temática', '🌹 Pétalos de rosa'],
      descripcion: 'La experiencia más exclusiva de Armenia. Suite premium con todas las comodidades imaginables para una ocasión especial inolvidable.',
      precio: 150.000,
      periodo: 'por 3 horas',
      favorito: false,
      tipo: 'suite',
      ciudad: 'armenia'
    }
  ];

  toggleFavorito(motel: any) {
    motel.favorito = !motel.favorito;
    }

  filtros = {
    jacuzzi: false,
    parqueadero: false,
    bar: false,
    tv: false,
    balcon: false,
    spa: false,
    aire: false,
    precioMin: null,
    precioMax: null,
    estrellas: 0,
    tipo: '',
    ciudad: ''
  };
  limpiarFiltros() {
    this.filtros = {
      jacuzzi: false,
      parqueadero: false,
      bar: false,
      tv: false,
      balcon: false,
      spa: false,
      aire: false,
      precioMin: null,
      precioMax: null,
      estrellas: 0,
      tipo: '',
      ciudad: ''
    };
  }
  get motelesFiltrados() {
    return this.moteles.filter(motel => {
      // Filtro por amenidades
      if (this.filtros.jacuzzi && !motel.features.some(f => f.toLowerCase().includes('jacuzzi'))) return false;
      if (this.filtros.parqueadero && !motel.features.some(f => f.toLowerCase().includes('parqueadero'))) return false;
      if (this.filtros.bar && !motel.features.some(f => f.toLowerCase().includes('bar'))) return false;
      if (this.filtros.tv && !motel.features.some(f => f.toLowerCase().includes('tv'))) return false;
      if (this.filtros.balcon && !motel.features.some(f => f.toLowerCase().includes('balcón'))) return false;
      if (this.filtros.spa && !motel.features.some(f => f.toLowerCase().includes('spa'))) return false;
      if (this.filtros.aire && !motel.features.some(f => f.toLowerCase().includes('aire'))) return false;

      // Filtro por precio
      if (this.filtros.precioMin && motel.precio < this.filtros.precioMin) return false;
      if (this.filtros.precioMax && motel.precio > this.filtros.precioMax) return false;

      // Filtro por calificación
      if (this.filtros.estrellas && motel.rating < this.filtros.estrellas) return false;

      // Filtro por tipo
      if (this.filtros.tipo && motel.tipo !== this.filtros.tipo) return false;

      // Filtro por ciudad
      if (this.filtros.ciudad && motel.ciudad !== this.filtros.ciudad) return false;

      return true;
    });
  }

}
