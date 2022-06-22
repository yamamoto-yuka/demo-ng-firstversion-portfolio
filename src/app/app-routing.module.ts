import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SpaceComponent } from './space/space.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', component:SpaceComponent},
  {path:'test', component:TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
