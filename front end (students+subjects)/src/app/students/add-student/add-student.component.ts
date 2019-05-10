import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentsService } from '../students.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  // students: Student[]= [];
  addedStudent: Student = new Student(this.stdSrv.listStudents.length+1, "", 20, []);

  addStudent(){
    if(this.addedStudent.age > 40) {
      alert("You can't ad studnt with age larger than 40 years old")
    } else if(this.addedStudent.age < 15) {
      alert("You can't ad studnt with age less than 15 years old")
    } else if(this.addedStudent.age == 0 || this.addedStudent.name == "") {
      alert("lease, Fill all fields..");
    }
    else {
      this.stdSrv.addStudent(new Student(this.addedStudent._id, this.addedStudent.name, this.addedStudent.age, this.addedStudent.subjects))
      .subscribe(a => this.stdSrv.listStudents.push(a));
      this.route.navigateByUrl("/students");
      console.log(this.stdSrv.listStudents.length+1);
    }
  }

  constructor(private stdSrv: StudentsService, private route: Router) { }

  ngOnInit() {

  }

}
