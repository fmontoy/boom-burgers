import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { Burger } from '../models/burger.model';
import { UserService } from './user.service';
import { LocalStorageService } from './local-storage.service';
@Injectable({
  providedIn: 'root'
})
export class BurgerService {

  private shoppingCar = new BehaviorSubject<Burger[]>([]);

  constructor(private http: HttpClient, private localStorage: LocalStorageService) { }

  getBurgers(): Observable<{burgers: Burger[]}> {
    return this.http.get<{burgers: Burger[]}>(`${environment.baseUrl}burger`);
  }

  getShoppingCar() {
    return this.shoppingCar;
  }

  addBurger(burger: Burger) {
    const burgers = this.shoppingCar.getValue();
    burgers.push(burger);
    this.shoppingCar.next(burgers);
  }

  setShoppingCar(burgers: Burger[]) {
    this.shoppingCar.next(burgers);
  }

  getCar() {
    return this.shoppingCar.getValue();
  }

  buyBurgers(body) {
    const token = this.localStorage.getValue('token');
    const headers = new HttpHeaders();
    return this.http.post(`${environment.baseUrl}burger/purchase`, body, {headers: {'authorization': token}});
  }
}
