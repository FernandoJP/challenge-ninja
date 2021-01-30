import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CardModule } from '../shared/UI/card/card.module';

import { PostComponent } from './post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsDialogComponent } from './post-details-dialog/post-details-dialog.component';


@NgModule({
  declarations: [PostComponent, PostListComponent, PostDetailsDialogComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    CardModule
  ]
})
export class PostModule { }
