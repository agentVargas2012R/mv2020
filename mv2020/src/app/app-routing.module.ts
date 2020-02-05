
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {HomeComponent} from './home/home.component'

const routes: Routes = [
	{path: '', pathMatch: 'full', component: HomeComponent},
];

@NgModule({
  imports: [NgbModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
