import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app.routing';

import { ClassesService } from './services/classes.service';
import { ConnectionsService } from './services/connections.service';

import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { LandingComponent } from './pages/landing/landing.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { SelectComponent } from './components/select/select.component';
import { TeacherListComponent } from './pages/teacher/teacher-list/teacher-list.component';
import { TeacherFormComponent } from './pages/teacher/teacher-form/teacher-form.component';
import { TeacherItemComponent } from './components/teacher-item/teacher-item.component';
import { TextAreaComponent } from './components/text-area/text-area.component';

import ptBr from '@angular/common/locales/pt';

registerLocaleData(ptBr);

@NgModule({
    declarations: [
        AppComponent,
        InputComponent,
        LandingComponent,
        PageHeaderComponent,
        SelectComponent,
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
    providers: [
        { provide: LOCALE_ID, useValue: 'pt' },

        ClassesService,
        ConnectionsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
