
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {HomeComponent} from './home/home.component';
import {GoodReadsComponent} from './good-reads/good-reads.component';
import {HireComponent} from './hire/hire.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'good-reads', pathMatch: 'full', component: GoodReadsComponent},
  {path: 'hire', pathMatch: 'full', component: HireComponent}
];

@NgModule({
  imports: [NgbModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
