import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksComponent } from './tasks/tasks.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksDetailComponent } from './tasks-detail/tasks-detail.component';
import { TasksNewComponent } from './tasks-new/tasks-new.component';

const routes: Routes = [
  {
    path: 'tasks',
    children: [
    	{
    		path: 'new',
    		component: TasksNewComponent
    	},
    	{
    		path: 'list',
    		component: TasksListComponent
    	},
    	{
    		path: ':id',
    		component: TasksDetailComponent
    	}
    ],
    component: TasksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
