import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  {path:"welcome",component:WelcomePageComponent},
  {path:"question",component:QuestionComponent},
  {path:'',redirectTo:'welcome',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
