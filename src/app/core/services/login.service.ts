import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { ILoginStatus } from '../models/ILoginStatus';
import { IToken } from '../models/IToken';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // local
  public url = "https://localhost:44395";

  // production
  // public url = "http://185.141.33.46:1100";

  loginSuccess$: Subject<ILoginStatus> = new Subject<ILoginStatus>();

  constructor(private http: HttpClient, private router: Router) {}

  getUserName(){ return this.getLoginStatus().username;}
  setLoginStatus(token: string, userName: string): void{
    let loginStatus: ILoginStatus = {accessToken: token, username: userName, isLogin: true};
    localStorage.setItem('devextremeyoutube-login-status', JSON.stringify(loginStatus));
  }

  getLoginStatus(): ILoginStatus { 
    let loginStatusStorage = JSON.parse(localStorage.getItem('devextremeyoutube-login-status') as string) as ILoginStatus;
    if (loginStatusStorage){
      return loginStatusStorage;
    }
    return {isLogin: false, username:'', accessToken:''};
  }
  getIsLogin(): boolean{return this.getLoginStatus().isLogin;}

  login(username: string, password: string): Observable<IToken> {

    const headers= new HttpHeaders()
    .set('content-type', 'application/x-www-form-urlencoded');

    return this.http.post<IToken>(this.url + '/token', 'grant_type=password&username='+username+'&password=' + password, { 'headers': headers });
  }

  logout(){
    localStorage.setItem('devextremeyoutube-login-status', JSON.stringify({ 
        username: null, 
        isLogin: false, 
        accessToken: null}
      ));
    this.loginSuccess$.next({ username: this.getUserName(), isLogin: this.getIsLogin(), accessToken: this.getLoginStatus().accessToken });
  }

  doLogin(values: any) {
    this.login(values.username, values.password).subscribe(
      data => {
        this.setLoginStatus(data.access_token, values.username);

        this.loginSuccess$.next({ username: this.getUserName(), isLogin: this.getIsLogin(), accessToken: this.getLoginStatus().accessToken });

        this.router.navigate(['/']);
      },
      err => alert(err.error.error_description)
    );
  }

  register(username: string, password: string, confirmPassword: string): Observable<any>{
    return this.http.post<any>(this.url + '/api/Account/Register', { username: username, password: password, confirmPassword: confirmPassword});
  }  

}
