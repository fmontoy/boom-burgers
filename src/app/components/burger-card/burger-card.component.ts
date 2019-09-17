import { Component, OnInit, Input } from '@angular/core';
import { Burger } from 'src/app/models/burger.model';
import { BurgerService } from 'src/app/services/burger.service';

@Component({
  selector: 'app-burger-card',
  templateUrl: './burger-card.component.html',
  styleUrls: ['./burger-card.component.scss']
})
export class BurgerCardComponent implements OnInit {

  @Input() burger: Burger;

  constructor(private burgerService: BurgerService) { }

  ngOnInit() {
  }

  buyBurger() {
    this.burgerService.addBurger(this.burger);
  }

}
