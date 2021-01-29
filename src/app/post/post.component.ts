import { Component, OnInit } from '@angular/core';

import { Post } from './post';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

    posts: Post[] = [];

    constructor(postService: PostService) {
      postService.getPosts().subscribe(posts => {
        this.posts = posts;
      });
    }

    ngOnInit() {

    }
}
