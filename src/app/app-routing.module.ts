import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
    {
        path: '',
        component: PostComponent
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