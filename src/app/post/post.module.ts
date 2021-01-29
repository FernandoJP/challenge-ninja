import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PostComponent } from './post.component';
import { CardModule } from '../shared/UI/card/card.module';

@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    RouterModule,
    CardModule
  ]
})
export class PostModule { }
