import { Component, OnInit } from '@angular/core';
import {SubjectsService} from '../subjects.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subjects } from '../subjects';
@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.css']
})
export class EditSubjectComponent implements OnInit {
  constructor(private subjsrv:SubjectsService,private route:Router,private act:ActivatedRoute) { }
   
  subj:Subjects = new Subjects(1,'name');
  edit(){
    this.act.params.subscribe(param =>{
      this.subj=this.subjsrv.sbjs.filter(elm => elm._id == param.id)[0];
      
    })
  }
  updateSubject(){
    this.subjsrv.editSubject(this.subj).subscribe((result)=>{
      this.subjsrv.sbjs.filter(elm => elm._id == this.subj._id)[0].name = this.subj.name;
    })
    this.route.navigateByUrl("/subjects");

  }

  ngOnInit() {
    this.edit();
    console.log(this.subj)
  }

}
