import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { BurgerService } from 'src/app/services/burger.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  token = null;
  burgers = 0;
  constructor(private userService: UserService, private localStorage: LocalStorageService,
              private burgerService: BurgerService) { }

  ngOnInit() {
    this.userService.getToken().subscribe(token => {
      this.token = token;
    });
    this.burgerService.getShoppingCar().subscribe(burgers => this.burgers = burgers.length);
  }

  logout() {
    this.userService.setToken(null);
    this.localStorage.clearStorage();
  }
}
