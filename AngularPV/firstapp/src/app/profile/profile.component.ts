import { Component } from '@angular/core';
import { UserService } from '../services/user.service'; // Update the path as per your project structure
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [NgFor],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  username:string = "";
  users:any[] = [];

  constructor(userService:UserService) {
    this.username = userService.data;
    this.users = userService.getUsers();
  }
}
