import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import { TaskService } from '../task.service';
import { Task } from '../task';
@Component({
  selector: 'app-tasks-detail',
  templateUrl: './tasks-detail.component.html',
  styleUrls: ['./tasks-detail.component.css']
})
export class TasksDetailComponent implements OnInit {
  task: Task;
  // Note the subscription instance variable 
  subscription: Subscription;
  constructor(private _route: ActivatedRoute, private _taskService: TaskService ) { }
  ngOnInit(): void {
    this.subscription = this._route.paramMap
      .switchMap(params => {
        console.log("TaskDetailsComponent loaded and url id given is: ", params.get('id'));
        return this._taskService.retrieveTask(params.get('id'));
    }).subscribe(task => this.task = task);
  }
}
