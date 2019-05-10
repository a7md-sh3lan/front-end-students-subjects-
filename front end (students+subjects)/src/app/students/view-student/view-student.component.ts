import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from '../student';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  student: Student = null;
  constructor(public stdSer: StudentsService, public router: Router, public url: ActivatedRoute) {
    console.log("student view");
   }


  ngOnInit() {
    this.url.params.subscribe((p)=>{
      this.stdSer.getStudent(p.id).subscribe(
        (student)=> this.student = student
      )
    });
  }

  grade(subject: number, degree: number){
    console.log(subject);
    this.stdSer.gradeSubject(this.student._id, subject, degree).subscribe(
      (res: any) => {
        if(res.updated){
          for(let sub of this.student.subjects){
            if(sub.subject._id == subject){
              console.log("catch!");
              sub.degree = degree;
              break;
            }

          }
        } else alert("Error grading the subject");
    })
  }

  deleteSubject(subject: number){
    this.stdSer.deleteSubject(this.student._id, subject).subscribe(
      (res: any)=>{
        if(res.deleted){
          this.student.subjects = this.student.subjects.filter((sub)=>sub.subject._id != subject);
        } else alert("Couldn't delete");
      }
    )
  }
    
  

}
