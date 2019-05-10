import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  listStudents: Student[]= [];
  // sbjs:Student[] = [];
  baseURL: string = "http://localhost:8080/students/";

  constructor(private http:HttpClient){}

  getAllStudents(){
    return this.http.get<Student[]>(this.baseURL);
  }

  deletStudent(id: number){
    return this.http.get<Student>(this.baseURL + "delete/" + id);
  }

  getStudent(id:number){
    return this.http.get<Student>(this.baseURL + id);
  }

  addStudent(sub: Student){
    return this.http.post<Student>(this.baseURL + "add", sub);
  }

  editStudent(sub: Student){
    return this.http.post<Student>(this.baseURL +"edit/"+ sub._id, sub);
  }
  
  assignStudentsToSubjects(studentIDs: number[], subjectIDs: number[]){
    return this.http.post(this.baseURL + "assign", {studentIDs, subjectIDs});
  }

  gradeSubject(id: number, subject: number, degree: number){
    return this.http.post(this.baseURL + id + "/grade", {subject, degree});
  }

  deleteSubject(id: number, subject: number){
    return this.http.delete(this.baseURL + id + "/subject/" + subject);
  }

}



///////////////////////////////////////
// import { Injectable } from '@angular/core';
// import { Student } from './student';

// @Injectable({
//   providedIn: 'root'
// })
// export class StudentsService {
//   stds: Student[] = [
//     new Student(1, "jo", 27, []),
//     new Student(2, "Wafik", 26, []),
//     new Student(3, "Maged", 25, []),
//     new Student(4, "Hussam", 25, []),
//     new Student(5, "Naguib", 25, []),
//   ]

//   getAllStudents(){
//     return this.stds;
//   }
  
//   constructor() { }
// }
