import {Component, AfterViewInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
    selector: 'my-app',
    templateUrl: './app/app.html',
    styleUrls: ['./app/app.style.css']
})
export class AppComponent {

    navBarShowing: boolean = true;

    constructor(private router: Router) {
        router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                console.log('navigation end');
                this.changeUrl(event);
            }
        });
    }

    changeUrl(event: Event) {
        if (this.router.isActive('dash', false)) {
            this.navBarShowing = false;
        } else {
            this.navBarShowing = true;
        }
        console.log('debug', this.navBarShowing);
    }

}
