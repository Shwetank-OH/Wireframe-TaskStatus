import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ContentService } from '../content.service';
import { TaskList } from './tasklist.model';
import { TaskviewComponent } from '../taskview/taskview.component';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css'],

})
export class TasklistComponent implements OnInit {

  tasklist: TaskList[]=[];
  constructor(private contentService:ContentService){}
  ngOnInit() {
    this.tasklist=this.contentService.tasklist;
  }

  getInfo(id:number){
    this.contentService.taskId=id;

  }

}
