import { Component, OnInit } from '@angular/core';
import {SubjectsService} from '../subjects/subjects.service'
import {StudentsService} from '../students/students.service'
import { Router } from '@angular/router';
import { Student } from '../students/student';
import { Subjects } from '../subjects/subjects';
@Component({
  selector: 'app-students-deg',
  templateUrl: './students-deg.component.html',
  styleUrls: ['./students-deg.component.css']
})
export class StudentsDegComponent implements OnInit {

  constructor(private stdsrv:StudentsService,private subjsrv:SubjectsService,private route:Router){}
  studentArray = [];
  subjectArray = [];
  loadStudents(){
    this.stdsrv.getAllStudents().subscribe(a=>{
      this.stdsrv.listStudents = a;
    })
  }
  loadSubjects(){
    this.subjsrv.getAllSubjects().subscribe(a=>{
      this.subjsrv.sbjs = a ;
    })
  }

  assign(stdSelection: HTMLSelectElement, subjSelection: HTMLSelectElement){
    // console.log(selection)
    let students = Array.from(stdSelection.options).filter((opt)=>opt.selected).map((opt=>Number.parseInt(opt.value)));
    let subjects = Array.from(subjSelection.options).filter((opt)=>opt.selected).map((opt=>Number.parseInt(opt.value)));
    if(students.length == 0 || subjects.length == 0) return;
    this.stdsrv.assignStudentsToSubjects(students, subjects).subscribe(
      (e: any)=>{
        if(e.updated)
          this.route.navigateByUrl("students");
        else alert("Error Happened, Please try again later");
      }
    )
  }

  ngOnInit() {
    this.loadSubjects();
    this.loadStudents();
  }

}
