import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from './../../environments/environment';

import { ConnectionAddRequest } from './../models/connection-add-request';
import { TotalConnectionsResponse } from './../models/total-connections-response';

@Injectable()
export class ConnectionsService {

    constructor(private httpClient: HttpClient) { }

    public getTotal(): Observable<TotalConnectionsResponse> {
        return this.httpClient.get<TotalConnectionsResponse>(
            `${environment.apiBaseURL}/connections`
        );
    }

    public add(connectionAddRequest: ConnectionAddRequest) {
        return this.httpClient.post(
            `${environment.apiBaseURL}/connections`, connectionAddRequest
        );
    }
}
