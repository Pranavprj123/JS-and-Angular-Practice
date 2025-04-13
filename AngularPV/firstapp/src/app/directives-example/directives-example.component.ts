import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { first } from 'rxjs';

@Component({
  selector: 'app-directives-example',
  imports: [NgIf,NgFor],
  templateUrl: './directives-example.component.html',
  styleUrl: './directives-example.component.css'
})
export class DirectivesExampleComponent {
  loggedIn:boolean= false;
  subjects:string[] = ['Maths', 'Physics', 'Chemistry', 'Biology'];
  players:string[] = ['Rohit', 'Virat', 'Dhoni', 'Sachin'];
  students=[
    {firstName:'Rohit', lastName:'Sharma', marks:95},
    {firstName:'Virat', lastName:'Kohli', marks:97},
    {firstName:'Sachin', lastName:'Tendulkar', marks:99},
  ]
  status:boolean = true;

}
