import { Component, Input } from '@angular/core';

import { ConnectionsService } from './../../services/connections.service';

import { ConnectionAddRequest } from './../../models/connection-add-request';
import { Classe } from './../../models/classe';

@Component({
    selector: 'app-teacher-item',
    templateUrl: './teacher-item.component.html',
    styleUrls: ['./teacher-item.component.css']
})
export class TeacherItemComponent {

    @Input() classe: Classe;

    constructor(private connectionsService: ConnectionsService) { }

    addConnection(userId: number) {
        const connectionAddRequest: ConnectionAddRequest = { user_id: userId };

        this.connectionsService.add(connectionAddRequest)
            .subscribe({
                next: () => console.log('Jesus'),
                error: (error: Error) => {
                    console.error(`Unexpected error. Error message: ${error.message}`)
                }
            });
    }
}
