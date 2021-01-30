import { ɵWebAnimationsStyleNormalizer } from '@angular/animations/browser';
import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  
  @Input() users: User[] = [];
  displayedColumns: string[] = ['id', 'name', 'username', 'phone', 'website', 'company', 'city'];
  dataSource: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.users);
    this.dataSource = this.users.map(user => {
      return {
        id: user.id,
        name: user.name,
        username: user.username,
        phone: user.phone,
        website: user.website,
        company: user.company.name,
        city: user.address.city
      }
    })
  }

}
