import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from './app.service';

// https://medium.com/bb-tutorials-and-thoughts/how-to-get-started-with-angular-c3c209d6fe90

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'getting-started-angular';

  constructor(private appService: AppService) {}

  userForm = new FormGroup({
    firstName: new FormControl('', [Validators.nullValidator, Validators.required, Validators.minLength(2)]),
    lastName: new FormControl('', [Validators.nullValidator, Validators.required]),
    email: new FormControl('', [Validators.nullValidator, Validators.required, Validators.email])
  });

  users: any[] = [];
  userCount = 0;

  ngOnInit() {}

  onSubmit() {
    console.log(this.userForm.value);
    const data = this.appService.addUser(this.userForm.value);
    this.userCount = this.userCount + 1;
    this.userForm.reset();

  }

  getAllUsers() {
    this.users = this.appService.getUsers();
  }
}