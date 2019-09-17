import { Component, OnInit } from '@angular/core';
import { BurgerService } from 'src/app/services/burger.service';
import { Burger } from 'src/app/models/burger.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  burgers: Burger[] = [];
  constructor(private burgerService: BurgerService) { }

  ngOnInit() {
    this.burgerService.getBurgers().subscribe(res => {
      this.burgers = res.burgers;
    });
  }

}
