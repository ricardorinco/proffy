import { Component, OnInit } from '@angular/core';

import { ClassesService } from './../../../services/classes.service';

import { Classe } from './../../../models/classe';
import { ClasseResponseFilters } from './../../../models/classe-response-filters';
import { Option } from './../../../models/option';

import { OptionsUtils } from './../../../utils/options.utils';

@Component({
    selector: 'app-teacher-list',
    templateUrl: './teacher-list.component.html',
    styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

    classes: Classe[] = [];
    subjects: Option[] = [];
    weekDays: Option[] = [];

    subjectFilter: string;
    weekDayFilter: number;
    timeFilter: string;

    constructor(private classesService: ClassesService) { }

    ngOnInit() {
        this.subjects = OptionsUtils.getSubjects();
        this.weekDays = OptionsUtils.getWeekDays();
    }

    changeFilters() {
        const classeResponseFilters: ClasseResponseFilters = {
            subject: this.subjectFilter,
            weekDay: this.weekDayFilter,
            time: this.timeFilter
        }

        if (
            this.filterValidation(this.subjectFilter)
            && this.filterValidation(this.weekDayFilter)
            && this.filterValidation(this.timeFilter)
        ) {
            this.classesService.getByFilters(classeResponseFilters)
                .subscribe({
                    next: (response: Classe[]) => {
                        this.classes = response;
                    },
                    error: (error: Error) => {
                        console.error(`Unexpected error. Error message: ${error.message}`)
                    }
                })
        }
    }

    private filterValidation(filter: any): boolean {
        if (filter === undefined || filter === null) {
            return false;
        }

        return true;
    }
}
