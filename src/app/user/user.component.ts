import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[] = [];

  constructor(private postService: UserService) {
  }

  ngOnInit() {
    this.postService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

}
