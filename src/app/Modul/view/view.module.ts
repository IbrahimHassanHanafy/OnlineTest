import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewRoutingModule } from './view-routing.module';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { SliderComponent } from './component/slider/slider.component';
import { TopicComponent } from './component/topic/topic.component';
import { InstructorComponent } from './component/instructor/instructor.component';
import { CommentsComponent } from './component/comments/comments.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './component/home/home.component';
import { MapComponent } from './component/map/map.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NotfoundComponent,
    SliderComponent,
    TopicComponent,
    InstructorComponent,
    CommentsComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    AppRoutingModule,
    SharedModule
  ],

})
export class ViewModule { }
