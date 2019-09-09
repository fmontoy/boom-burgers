import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  news: Card[] = [{image: 'assets/images/news1.jpg', title: 'Catálogo', description: 'Mira las opciones que tenemos disponibles para ti'},
                  {image: 'assets/images/news2.jpg', title: 'Pide', description: 'Realiza pedidos en línea al instante'},
                  {image: 'assets/images/news3.jpg', title: 'Visitanos', description: 'Visita nuestras tiendas'}];

  constructor() { }

  ngOnInit() {
  }

}
