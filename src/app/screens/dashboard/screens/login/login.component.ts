import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private userService: UserService, private router: Router, private localStorage: LocalStorageService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.login(this.loginForm.value).subscribe(res => {
      this.localStorage.setValue('token', res.token);
      this.userService.setToken(res);
      this.router.navigateByUrl('/');
    },
    err => {
      console.log(err);
    });
  }

}
