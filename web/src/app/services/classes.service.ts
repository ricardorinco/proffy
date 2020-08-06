import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from './../../environments/environment';

import { Classe } from './../models/classe';
import { ClasseAddRequest } from './../models/classe-add-request';
import { ClasseResponseFilters } from './../models/classe-response-filters';

@Injectable()
export class ClassesService {

    constructor(private httpClient: HttpClient) { }

    public add(classeAddRequest: ClasseAddRequest): Observable<ClasseAddRequest> {
        return this.httpClient.post<ClasseAddRequest>(
            `${environment.apiBaseURL}/classes`, classeAddRequest
        );
    }

    public getByFilters(classeResponseFilters: ClasseResponseFilters): Observable<Classe[]> {
        const filters = `week_day=${classeResponseFilters.weekDay}&subject=${classeResponseFilters.subject}&time=${classeResponseFilters.time}`;

        return this.httpClient.get<Classe[]>(
            `${environment.apiBaseURL}/classes?${filters}`
        );
    }
}
