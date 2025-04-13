import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-switchexample',
  imports: [NgSwitch, NgSwitchCase,NgSwitchDefault],
  templateUrl: './switchexample.component.html',
  styleUrl: './switchexample.component.css'
})
export class SwitchexampleComponent {
  @Input() requestStatus: string = 'approved';

  changeStatus(newStatus: string) 
{
    this.requestStatus = newStatus;
}

  // course: string = 'Python';

  // changeCourse(newCourse: string)
  // {
  //   this.course = newCourse;
  // }
}