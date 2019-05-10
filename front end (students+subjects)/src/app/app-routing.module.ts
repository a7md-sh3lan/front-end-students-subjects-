import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentsComponent} from './students/students.component';
import {AnyComponent} from './any/any.component';
import {ListSubjectComponent} from './subjects/list-subject/list-subject.component';
import {AddSubjectComponent} from './subjects/add-subject/add-subject.component';
import {EditSubjectComponent} from './subjects/edit-subject/edit-subject.component';
import {ViewSubjectComponent} from './subjects/view-subject/view-subject.component';
import { ListStudentsComponent } from './students/list-students/list-students.component';
import { EditStudentComponent } from './students/edit-student/edit-student.component';
import { ViewStudentComponent } from './students/view-student/view-student.component';
import { AddStudentComponent } from './students/add-student/add-student.component';
import { StudentsDegComponent } from './students-deg/students-deg.component';






const routes: Routes = [
  // {path:"login",component:LoginComponent},

  
  // {path:"students",component:StudentlistComponent,children:[

  //   {path:"add",component:CreateComponent},
  //   {path:":id",component:DetailsComponent},


  
  // ]},
  {path:"home",component:StudentsComponent},
  {path: "assign", component:StudentsDegComponent},
  // Students Routes
  {path: "students", component: ListStudentsComponent},
  {path: "students/edit/:id", component: EditStudentComponent},
  {path: "students/view/:id", component: ViewStudentComponent},
  {path: "students/add", component: AddStudentComponent},
  
  // Subjects Routes
  {path:"subjects",component:ListSubjectComponent},
  {path:"subjects/edit/:id",component:EditSubjectComponent},
  {path:"subjects/view/:id",component:ViewSubjectComponent},
  {path:"subjects/add",component:AddSubjectComponent},
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"**",component:AnyComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
