import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { Router } from '@angular/router';
import { Student } from '../student';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {
  // listStudents: Student[]= [];

  constructor(private stdSrv: StudentsService, private route: Router) { }

  load(){
    this.stdSrv.getAllStudents().subscribe(a => this.stdSrv.listStudents = a);
  }

  edit(id: number){
    this.route.navigateByUrl("/students/edit/"+id);
    // this.route.navigate("/students/edit/", id);
  }

  delete(id: number){
    this.stdSrv.deletStudent(id).subscribe(a => this.load());
    // this.insService.deleteInstructor(id).subscribe(a=> this.showInstructors());
  }

  view(id: number){
    this.route.navigateByUrl("students/view/"+id);
  }
  ngOnInit() {
    this.load();
  }

}
