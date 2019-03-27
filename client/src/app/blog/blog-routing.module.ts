import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { AddPostComponent } from './add-post/add-post.component';

const routes: Routes = [
  { path: '', component: BlogHomeComponent},
  { path: 'add', component: AddPostComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
