import {Component, AfterViewInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: 'login',
    templateUrl: './app/login/login.html',
    styleUrls: ['./app/login/login.style.css']
})

export class LoginComponent {
    constructor(private router: Router) {

    }

    loginSuccess() {
        this.router.navigateByUrl('dash');
    }
}

