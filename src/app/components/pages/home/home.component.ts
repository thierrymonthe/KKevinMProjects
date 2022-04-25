import {Component, OnInit} from '@angular/core';
import {ShopService} from '../../services/shop.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends ShopService implements OnInit {

  partners = [{
    id: 0,
    links: 'https://www.kreis-steinfurt.de/kv_steinfurt/Kreisverwaltung/%C3%84mter/Kommunales%20Integrationszentrum/',
    title: 'kommunales',
    image: [
      '/assets/img/partners/partner-1.jpg',
    ]
  },
    {
      id: 1,
      title: 'cohedo',
      links: 'https://www.kreis-steinfurt.de/kv_steinfurt/Kreisverwaltung/%C3%84mter/Kommunales%20Integrationszentrum/',

      image: [
        '/assets/img/partners/partner-2.jpg',
      ]
    },
    {
      id: 2,
      links: 'https://cohedo.de/',
      title: 'stadt dortmund',
      image: [
        '/assets/img/partners/partner-3.jpg',
      ]
    }];


  ngOnInit(): void {
  }

}
