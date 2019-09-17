import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';
import { UserService } from './services/user.service';
import { BurgerService } from './services/burger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'boom-burgers';

  constructor(private localStorage: LocalStorageService, private userService: UserService,
              private burgerService: BurgerService) {}

  ngOnInit() {
   const token = this.localStorage.getValue('token');
   if (token) {
     this.userService.setToken(token);
   }
  }
}
