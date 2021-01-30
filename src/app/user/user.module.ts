import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CardModule } from '../shared/UI/card/card.module';
import { MatTableModule } from '@angular/material/table';

import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [UserComponent, UserListComponent],
  imports: [
    CommonModule,
    CardModule,
    MatTableModule,
    MatCardModule
  ]
})
export class UserModule { }
