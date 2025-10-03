import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.html',
  styleUrl: './banner.css'
})
export class Banner {
  @Input() title: string = 'ENCUENTRA TU ESCAPADA IDEAL CON OFERTAS EXCLUSIVAS';
  @Input() subtitle: string = 'Descubre promociones irresistibles y crea momentos inolvidables en UBIK.';
}
