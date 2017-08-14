  import { Injectable } from '@angular/core';
  import { Http } from '@angular/http';

  import 'rxjs/add/operator/toPromise';
  import 'rxjs/add/operator/map';

  import { Task } from './task';

  import { TASKS } from './mock-tasks';

  @Injectable()
  export class TaskService {
    tasks: Task[] = TASKS;

    constructor(private _http: Http) {}

    retrieveTasks(): Promise<Task[]> {
      return Promise.resolve(this.tasks);
    }

    retrieveTask(id: string): Promise<Task> {
      return new Promise((resolve, reject) => {
        const foundTask = this.tasks.find(task => task._id === parseInt(id, 10));

        if (foundTask) {
          return resolve(foundTask);
        }
        reject(new Error(`Unable to find task with id ${ id }`));
      });
    }
  }
