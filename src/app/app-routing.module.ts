import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './Modul/view/component/home/home.component';
import { AboutComponent } from './Modul/view/component/about/about.component';
import { ContactComponent } from './Modul/view/component/contact/contact.component';
import { LoginComponent } from './Modul/auth/Component/login/login.component';
import { RegisterComponent } from './Modul/auth/Component/register/register.component';
import { NotfoundComponent } from './Modul/view/component/notfound/notfound.component';
import { InstructionsComponent } from './Modul/exam/Component/instructions/instructions.component';
import { QuestionComponent } from './Modul/exam/Component/question/question.component';
import { SummaryComponent } from './Modul/exam/Component/summary/summary.component';
import { TopicComponent } from './Modul/view/component/topic/topic.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'topics', component:TopicComponent},  
  {path:'topics/:id',children:[
    {path:'',component:InstructionsComponent},
    {path:'question', component:QuestionComponent},
    {path:'question/summary/:summaryId', component:SummaryComponent},
  ]},
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
