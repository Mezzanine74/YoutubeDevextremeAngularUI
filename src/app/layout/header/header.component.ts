import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName: string;
  isLoginSuccess: boolean ;

  onLogOut(){
    console.log('asdfasdf');
    localStorage.setItem('devextremeyoutube-login-status', '');
    this.router.navigate(['/login']);
  }
  
  constructor(private loginService: LoginService, private router: Router) { 
    this.isLoginSuccess = loginService.getIsLogin();
    this.userName = loginService.getUserName();
  }

  ngOnInit(): void {
    this.loginService.loginSuccess$.subscribe(
      loginData => {
        this.userName = loginData.username,
        this.isLoginSuccess = loginData.isLogin;
      }
    )
  }

}
