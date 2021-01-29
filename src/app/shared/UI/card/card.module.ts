import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { CardComponent } from './card.component';

@NgModule({
  declarations: [CardComponent],
  imports: [
    MatCardModule,
    CommonModule
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
