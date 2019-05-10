import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../subjects.service';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { Subjects } from '../subjects';
import { StudentsService } from '../../students/students.service';
import { Student } from '../../students/student';
import { ListSubjectComponent } from '../../subjects/list-subject/list-subject.component';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-view-subject',
  templateUrl: './view-subject.component.html',
  styleUrls: ['./view-subject.component.css']
})
export class ViewSubjectComponent implements OnInit {

  subjects: Subjects = null;
  name: string = " ";
  
  constructor(public subSer: SubjectsService, public router: Router, public url: ActivatedRoute) { 
    console.log("subject view..");
    console.log(this.subjects);
    this.url.params.subscribe((p)=> {
      // this.name = p.name;
    })
  }

  ngOnInit() {
    this.url.params.subscribe((p)=> {
      console.log(p.id);
      console.log(this.subSer.sbjs[p.id-1].name);
      this.subSer.getSubject(p.id).subscribe(
        (subject)=> {this.subjects = subject;
        // console.log(this.subjects);
        console.log(subject);
        this.name = this.subSer.sbjs[p.id-1].name}
      );
      // console.log(this.subject);
    });
    // console.log(this.url.params);
  }
}