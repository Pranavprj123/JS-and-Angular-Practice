import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { Student } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  parentData:string = "Data from Parent Component";

  receiveMessage(data:string) 
  {
    alert(data);
  }

  receiveStudentDetails(data:Student)
  {
    alert(data.id+" "+data.name);
  }
}
