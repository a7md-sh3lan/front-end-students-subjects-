import { Component, OnInit } from '@angular/core';
import {SubjectsService} from './../subjects.service'
import {Subjects} from './../subjects'
import {  Router } from '@angular/router';
@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {
addedSubject:Subjects = new Subjects(0,"test");

addSubject(){
  this.sbjsrv.addSubject(new Subjects(this.addedSubject._id,this.addedSubject.name)).subscribe(a=>
    this.sbjsrv.sbjs.push(a)
    )
  this.route.navigateByUrl("/subjects");
}




  constructor(private sbjsrv:SubjectsService ,private route:Router)  { }

  ngOnInit() {
  }

}
