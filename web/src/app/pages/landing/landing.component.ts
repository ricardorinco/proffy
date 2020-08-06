import { Component, OnInit } from '@angular/core';

import { ConnectionsService } from './../../services/connections.service';

import { TotalConnectionsResponse } from './../../models/total-connections-response';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

    totalConnections: number;

    constructor(private connectionsService: ConnectionsService) { }

    ngOnInit() {
        this.connectionsService.getTotal()
            .subscribe({
                next: (response: TotalConnectionsResponse) => {
                    this.totalConnections = response.total
                },
                error: (error: Error) => {
                    console.error(`Unexpected error. Error message: ${error.message}`)
                }
            });
    }
}
