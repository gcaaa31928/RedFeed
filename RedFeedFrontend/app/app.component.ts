import {Component, AfterViewInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.html',
    styleUrls: ['./app/app.style.css'],
    animations: [
        trigger('fadeInOutDown', [
            transition(':leave', [style({
                opacity: 1
            }), animate('100ms ease-out', style({
                opacity: 0,
                transform: 'translate3d(0, 100%, 0)'
            }))]),
            transition(':enter', [style({
                opacity: 0,
                transform: 'translate3d(0, 100%, 0)'
            }), animate('100ms ease-out', style({
                opacity: 1,
                transform: 'translate3d(0, 0, 0)'
            }))])
        ])
    ]
})
export class AppComponent {

    navBarShowing: boolean = false;

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

    }

}
