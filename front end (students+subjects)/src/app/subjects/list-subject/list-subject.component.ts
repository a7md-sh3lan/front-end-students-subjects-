import { Component, OnInit } from '@angular/core';
import {SubjectsService} from '../subjects.service';
import { Subjects } from '../subjects';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-subject',
  templateUrl: './list-subject.component.html',
  styleUrls: ['./list-subject.component.css']
})
export class ListSubjectComponent implements OnInit {
  
  constructor(private subjSrv:SubjectsService,private route:Router) { }
  load(){
    this.subjSrv.getAllSubjects().subscribe((a)=>{
      this.subjSrv.sbjs = a;
    })
  }
  title:String = "";
  edit(id:number){
    this.route.navigateByUrl("/subjects/edit/"+id);
  }
  delete(id:number){
    this.subjSrv.deletSubject(id).subscribe((result)=>{

    });
    this.load();

  }

  view(id:number,name:String){
    this.route.navigateByUrl("/subjects/view/"+id);
    this.title= name;
  }
  ngOnInit() {
    this.load();
  }

}
