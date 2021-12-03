import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { IUser } from '../user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: IUser = { username:'', password:''};

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
  }

  signIn(){

    this.authService.login(this.user).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/dashboard']);
      },
      err => console.log(err)
    );
  }

}
