import { Component, OnInit } from '@angular/core';
import { BurgerService } from 'src/app/services/burger.service';
import { Observable } from 'rxjs';
import { Burger } from 'src/app/models/burger.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {

  burgers: Observable<Burger[]>;

  form = new FormGroup({
    address: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required)
  });

  constructor(private burgerService: BurgerService) { }

  ngOnInit() {
    this.burgers = this.burgerService.getShoppingCar();
  }

  buy() {
    const burgers = this.burgerService.getCar().map(burger => burger.name);
    this.burgerService.buyBurgers({...this.form.value, burgers }).subscribe(res => {
      alert('Has comprado hamburguersas satisfactoriamente');
    });
  }

}
