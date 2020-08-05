import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-teacher-form',
    templateUrl: './teacher-form.component.html',
    styleUrls: ['./teacher-form.component.css']
})
export class TeacherFormComponent implements OnInit {

    classesForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.createClassesForm();
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
            cost: ['', Validators.required]
        });
    }

}
