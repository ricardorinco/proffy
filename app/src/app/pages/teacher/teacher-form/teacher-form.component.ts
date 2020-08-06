import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
    selector: 'app-teacher-form',
    templateUrl: './teacher-form.component.html',
    styleUrls: ['./teacher-form.component.css']
})
export class TeacherFormComponent implements OnInit {

    classesForm: FormGroup;
    scheduleItemsForm: FormArray;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.createClassesForm();
        this.addScheduleItem();
    }

    addScheduleItem() {
        this.scheduleItemsForm = this.classesForm.controls.scheduleItems as FormArray;

        this.scheduleItemsForm.push(
            this.formBuilder.group({
                week_day: ['', Validators.required],
                from: ['', Validators.required],
                to: ['', Validators.required]
            })
        );
    }

    sendData() {
        if (this.classesForm.valid) {
            const addClassesRequest = this.classesForm.value;
        }
    }

    private createClassesForm() {
        this.classesForm = this.formBuilder.group({
            name: ['', Validators.required],
            avatar: ['', Validators.required],
            whatsapp: ['', Validators.required],
            subject: ['', Validators.required],
            cost: ['', Validators.required],
            bio: ['', Validators.required],
            scheduleItems: new FormArray([])
        });
    }

}
