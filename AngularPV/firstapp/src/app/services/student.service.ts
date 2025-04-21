import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {

  students=[
    {firstName:'Abhishek', lastName:'Sharma', marks:95},
    {firstName:'Virat', lastName:'Kohli', marks:97},
    {firstName:'Sachin', lastName:'Tendulkar', marks:99},
  ]
  constructor() { }
}
