import { Component } from '@angular/core';
import { AuthService } from './login.service'
import { FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';

function cather() { }

@Component({
    selector: 'login',
    templateUrl: './login.template.html',
    styles: []
})
export class LoginComponent {


    state: string

    loginForm = new FormGroup({
        username: new FormControl(),
        password: new FormControl()
    })

    signupForm = new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl(),
        username: new FormControl(),
        email: new FormControl(),
        password: new FormControl()
    })

    constructor(
        private authService: AuthService,
        private router: Router
    ) {
        this.state = 'login'

    }


    login(user) {
        this.authService.login(user)
            .subscribe(data => {
                localStorage.token = data.token;
                console.log('localStorage.token',localStorage.token);
                this.router.navigate(['dashboard']);
            }, err => {
                alert(err._body);
            });


    }

    signup(user) {
        this.authService.signup(user)
            .subscribe(data => {
                localStorage.token = data.token
                this.router.navigate(['dashboard'])
            },
            err => {
                alert(err._body);
            })


    }


}