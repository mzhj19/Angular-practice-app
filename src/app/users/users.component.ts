import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor() {}

  @Input() users!: any[];
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
}
