import { Component } from '@angular/core';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-taskreset',
  templateUrl: './taskreset.component.html',
  styleUrls: ['./taskreset.component.css']
})
export class TaskresetComponent {

  constructor(private contentService:ContentService){}
  reset(){
    this.contentService.taskDenied=0;
    this.contentService.taskDone=0;
    for(let i=0;i<this.contentService.tasklist.length;i++){
      this.contentService.tasklist[i].status=null;
      this.contentService.tasklist[i].reason=null;
    }
  }
}
