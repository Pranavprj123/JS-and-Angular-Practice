import { Component, Input, Output,EventEmitter } from '@angular/core';

export interface Student{
  id:number;
  name:string;
}
@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Output() eventemmiter=new EventEmitter<string>();

  @Output() student=new EventEmitter<Student>();

  @Input() receivedData:string = "";

  sendMessage()
  {
    this.eventemmiter.emit("Hello from Child Component");
  }

  sendStudent()
  {
    this.student.emit({id:1,name:"John"});
  }
}
