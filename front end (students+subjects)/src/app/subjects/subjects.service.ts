import { Injectable } from '@angular/core';
import {Subjects} from './subjects'
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  sbjs:Subjects[] = [];
  baseURL: string = "http://localhost:8080/subjects/";

  constructor(private http:HttpClient){}

  getAllSubjects(){
    return this.http.get<Subjects[]>(this.baseURL);
  }

  deletSubject(id: number){
    return this.http.get<Subjects>(this.baseURL + "delete/" + id);
  }

  getSubject(id:number){
    return this.http.get<Subjects>(this.baseURL + id);
  }

  addSubject(sub: Subjects){
    return this.http.post<Subjects>(this.baseURL + "add", sub);
  }

  editSubject(sub: Subjects){
    return this.http.post(this.baseURL + "edit/"+ sub._id, sub);
  }

}