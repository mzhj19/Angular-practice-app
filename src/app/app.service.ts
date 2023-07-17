import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  users = [
    {
      firstName: 'fname1',
      lastName: 'lname1',
      email: 'name1@gmail.com'
    },
    {
      firstName: 'fname2',
      lastName: 'lname2',
      email: 'name2@gmail.com'
    },
    {
      firstName: 'fname3',
      lastName: 'lname3',
      email: 'name3@gmail.com'
    }
  ];

  getUsers() {
    return this.users;
  }

  addUser(user: any) {
    return this.users.push(user);
  }

}