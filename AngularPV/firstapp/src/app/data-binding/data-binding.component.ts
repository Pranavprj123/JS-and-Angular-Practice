import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  firstname:string = "John";
  lastname:string = "Doe";
  age:number = 30;
  isActive:boolean = true;
  color:string = "plum";
  border:string = "2px solid black";

  showAlert() {
    alert("Hello there !!!!");
  }
}
