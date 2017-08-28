
import {Component} from "@angular/core";

@Component( {
    selector: 'dash',
    templateUrl: './app/dash/dash.html',
    styleUrls: ['./app/dash/dash.style.css']
})

export class DashComponent {
    collections: any = [
        {
            title: 'CollectionsTitle',
            feeds: [
                {title: 'Feed title1', unread: 20},
                {title: 'Feed title1', unread: 20},
                {title: 'Feed title1', unread: 20}
            ]
        },
        {
            title: 'CollectionsTitle2',
            feeds: [
                {title: 'Feed title1', unread: 20},
                {title: 'Feed title1', unread: 20},
                {title: 'Feed title1', unread: 20}
            ]
        },
        {
            title: 'CollectionsTitle3',
            feeds: [
                {title: 'Feed title1', unread: 20},
                {title: 'Feed title1', unread: 20},
                {title: 'Feed title1', unread: 20}
            ]
        }
    ];


    constructor() {
    }
}