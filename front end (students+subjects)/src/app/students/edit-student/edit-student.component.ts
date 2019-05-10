import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from '../student';
// import {  } from '';
// import { request } from 'https';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  // students: Student[]= [];
  editStd = this.stdSrv.getStudent(1);
  
  editStudent: Student = new Student(0, "test", 0, []);
  edit(){
    let StdId = 0;
    this.activeURL.params.subscribe(param=>{
      this.editStudent = this.stdSrv.listStudents.filter(elm => elm._id == param.id)[0];
    });
  }
 
  updateStudent(){
    this.stdSrv.editStudent(this.editStudent).subscribe(a =>{
      this.stdSrv.listStudents.filter(elm => elm._id == this.editStudent._id)[0].name = this.editStudent.name;
      this.stdSrv.listStudents.filter(elm => elm._id == this.editStudent._id)[0].age = this.editStudent.age;
    })
    this.route.navigateByUrl("/students")
  }


  constructor(private stdSrv: StudentsService, private route: Router, private activeURL: ActivatedRoute) { }

  ngOnInit() {
    // this.getStudent();
    this.edit()
  }

}
