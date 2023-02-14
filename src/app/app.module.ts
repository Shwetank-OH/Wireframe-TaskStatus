import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TaskstatusComponent } from './taskstatus/taskstatus.component';
import { TaskviewComponent } from './taskview/taskview.component';
import { TaskresetComponent } from './taskreset/taskreset.component';
import { ContentService } from './content.service';


@NgModule({
  declarations: [
    AppComponent,
    TasklistComponent,
    TaskstatusComponent,
    TaskviewComponent,
    TaskresetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers:[ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
