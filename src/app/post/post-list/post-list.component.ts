import { Component, Input, OnInit } from '@angular/core';

import { UserService } from 'src/app/user/user.service';
import { Post } from '../post';
import { PostView } from './post-view'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() posts: Post[] = [];
  postsView: any = [];

  constructor(userService: UserService) { 
    userService.getUsers().subscribe(user => {
      this.postsView = this.posts.map(post => {
        return {...post, user: user.find(user => user.id )}
      })
    });
  }

  ngOnInit(): void {
  }

}
