import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { UserService } from 'src/app/user/user.service';
import { Post } from '../post';
import { PostDetailsDialogComponent } from '../post-details-dialog/post-details-dialog.component';
import { PostView } from './post-view';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() posts: Post[] = [];
  postsView: PostView[] = [];

  constructor(private userService: UserService,
    public dialog: MatDialog) { 
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(user => {
      this.postsView = this.posts.map(post => {
        return {...post, user: user.find(user => user.id === post.userId)}
      }) as PostView[];
    });
  }

  openPostDetailsDialog(post: PostView) {
    const dialogRef = this.dialog.open(PostDetailsDialogComponent, {
      data: {
        post
      }
    });
  }
}
