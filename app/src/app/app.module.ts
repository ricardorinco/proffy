import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { LandingComponent } from './pages/landing/landing.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { TeacherListComponent } from './pages/teacher/teacher-list/teacher-list.component';
import { TeacherFormComponent } from './pages/teacher/teacher-form/teacher-form.component';
import { TeacherItemComponent } from './components/teacher-item/teacher-item.component';
import { TextAreaComponent } from './components/text-area/text-area.component';

@NgModule({
    declarations: [
        AppComponent,
        InputComponent,
        LandingComponent,
        PageHeaderComponent,
        TeacherListComponent,
        TeacherFormComponent,
        TeacherItemComponent,
        TextAreaComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpClientJsonpModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
