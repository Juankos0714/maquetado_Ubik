import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
    user = {
            photo: 'https://res.cloudinary.com/dwkq16pdu/image/upload/v1759354829/28003-1740766555_rxpcqb.jpg', 
            name: 'JEAN CLAUDE  VAN DAMME',
            country: 'Armenia, Quindío'
          };
}
