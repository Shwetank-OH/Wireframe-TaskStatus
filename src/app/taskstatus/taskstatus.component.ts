import { Component } from '@angular/core';
import { of } from 'rxjs';
import { ContentService } from '../content.service';
import { TaskList } from '../tasklist/tasklist.model';

@Component({
  selector: 'app-taskstatus',
  templateUrl: './taskstatus.component.html',
  styleUrls: ['./taskstatus.component.css']
})
export class TaskstatusComponent {
  taskdone: number;
  taskdenied: number;
  taskList: any;
  constructor(private contentService:ContentService){
    this.taskList=this.contentService.tasklist;
    this.taskdone=0;
    this.taskdenied=0;
  }

  getTaskStatus(){
    this.taskdone=this.contentService.taskDone;
    this.taskdenied=this.contentService.taskDenied;
  }

}
