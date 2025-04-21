import { inject, Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggerService:LoggerService=inject(LoggerService);
  data:string = "John Doe"; 

     users:any[]=[{userId:1, username:"John Doe"},
    {userId:2, username:"Jane Doe"}]; 
  getUsers() 
  {
    this.loggerService.msg(`${this.users.length} users fetched`,this.users);
    return this.users 
  }
  constructor() { }
}
