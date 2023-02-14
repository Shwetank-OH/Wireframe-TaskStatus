import { Component, DoCheck, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ContentService } from '../content.service';
import { TaskList } from '../tasklist/tasklist.model';

@Component({
  selector: 'app-taskview',
  templateUrl: './taskview.component.html',
  styleUrls: ['./taskview.component.css'],
})
export class TaskviewComponent {

  taskContent: any;
  reasonData: any;
  constructor(private contentService: ContentService){
    this.taskContent=new TaskList(0,"Default","https://tse1.mm.bing.net/th/id/OIP.llFnJCNUO8lq0KEzGeeFmAHaFj?pid=ImgDet&rs=1");
  }

  getDataContent(){
    this.taskContent=this.contentService.tasklist[this.contentService.taskId-1];
  }

  statusDone(){
    if(this.contentService.tasklist[this.contentService.taskId-1].status===null){
      this.contentService.tasklist[this.contentService.taskId-1].status="Done";
      this.contentService.taskDone++;
    }
  }

  statusDenied(){
    if(this.contentService.tasklist[this.contentService.taskId-1].status===null){
      this.contentService.tasklist[this.contentService.taskId-1].status="Denied";
      this.contentService.taskDenied++;
    }
  }

}
