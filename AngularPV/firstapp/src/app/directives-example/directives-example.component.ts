import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { first } from 'rxjs';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-directives-example',
  imports: [NgIf,NgFor],
  templateUrl: './directives-example.component.html',
  styleUrl: './directives-example.component.css',
  providers: [StudentService],
})
export class DirectivesExampleComponent {
  stundentService:StudentService=inject(StudentService);


  loggedIn:boolean= false;
  subjects:string[] = ['Maths', 'Physics', 'Chemistry', 'Biology'];
  players:string[] = ['Rohit', 'Virat', 'Dhoni', 'Sachin'];
  // students=[
  //   {firstName:'Rohit', lastName:'Sharma', marks:95},
  //   {firstName:'Virat', lastName:'Kohli', marks:97},
  //   {firstName:'Sachin', lastName:'Tendulkar', marks:99},
  // ]
  students:any[] = [];
  status:boolean = true;

  constructor() {
    this.students = this.stundentService.students;

  }

}
