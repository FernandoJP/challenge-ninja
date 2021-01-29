import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

import { PostComponent } from './post.component';
import { CardModule } from '../shared/UI/card/card.module';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  declarations: [PostComponent, PostListComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    CardModule
  ]
})
export class PostModule { }
