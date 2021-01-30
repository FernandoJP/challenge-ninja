import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostView } from '../post-list/post-view';

@Component({
  selector: 'app-post-details-dialog',
  templateUrl: './post-details-dialog.component.html',
  styleUrls: ['./post-details-dialog.component.scss']
})
export class PostDetailsDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { post: PostView }) { }

  ngOnInit(): void {
    console.log(this.data.post);
    
  }

}
