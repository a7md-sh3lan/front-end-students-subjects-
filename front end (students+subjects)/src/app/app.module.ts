import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { AnyComponent } from './any/any.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { AddSubjectComponent } from './subjects/add-subject/add-subject.component';
import { ListSubjectComponent } from './subjects/list-subject/list-subject.component';
import { EditSubjectComponent } from './subjects/edit-subject/edit-subject.component';
import { ViewSubjectComponent } from './subjects/view-subject/view-subject.component';
import { AddStudentComponent } from './students/add-student/add-student.component';
import { EditStudentComponent } from './students/edit-student/edit-student.component';
import { ListStudentsComponent } from './students/list-students/list-students.component';
import { ViewStudentComponent } from './students/view-student/view-student.component';
import { StudentsDegComponent } from './students-deg/students-deg.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    AnyComponent,
    SubjectsComponent,
    AddSubjectComponent,
    ListSubjectComponent,
    EditSubjectComponent,
    ViewSubjectComponent,
    AddStudentComponent,
    EditStudentComponent,
    ListStudentsComponent,
    ViewStudentComponent,
    StudentsDegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
