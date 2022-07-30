
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // CLI imports router
import { LoginService } from 'src/app/core/services/login.service';
import { FormGroup, FormControl, Validators, FormBuilder }    from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  login_Form: FormGroup;
  username = new FormControl("", Validators.required);
  password = new FormControl("", Validators.required);

  constructor(private router: Router, private loginService: LoginService, fb: FormBuilder) {
        this.login_Form = fb.group({
            "username": this.username,
            "password": this.password
        });
   }  

   doLogin(values: any): void {

     if (this.login_Form.valid) {

       this.loginService.doLogin(values);

    }
}   

  ngOnInit(): void {
  }

}
