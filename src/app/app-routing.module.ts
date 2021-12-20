import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './layout/body/body.component';
import { NewCarComponent } from './pages/new-car/new-car.component';

const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'new-car', component: NewCarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
