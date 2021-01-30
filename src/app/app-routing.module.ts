import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PostComponent } from './post/post.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
    {
        path: 'posts',
        component: LayoutComponent,
        children: [
          { path: '', component: PostComponent },
        ]
    },
    {
        path: 'users',
        component: LayoutComponent,
        children: [
          { path: '', component: UserComponent },
        ]
    },
    { 
        path: '**', 
        component: NotFoundComponent
    }  
];

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes) 
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }