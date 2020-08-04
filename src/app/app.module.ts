import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { TeacherListComponent } from './pages/teacher/teacher-list/teacher-list.component';
import { TeacherFormComponent } from './pages/teacher/teacher-form/teacher-form.component';
import { TeacherItemComponent } from './components/teacher-item/teacher-item.component';

@NgModule({
    declarations: [
        AppComponent,
        LandingComponent,
        PageHeaderComponent,
        TeacherListComponent,
        TeacherFormComponent,
        TeacherItemComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
