import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './pages/landing/landing.component';
import { TeacherFormComponent } from './pages/teacher/teacher-form/teacher-form.component';
import { TeacherListComponent } from './pages/teacher/teacher-list/teacher-list.component';

const appRoutings: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: LandingComponent },

    { path: 'study', component: TeacherListComponent },
    { path: 'given-classes', component: TeacherFormComponent }
];

@NgModule({
    exports: [RouterModule],
    imports: [
        RouterModule.forRoot(appRoutings)
    ]
})
export class AppRoutingModule {}
