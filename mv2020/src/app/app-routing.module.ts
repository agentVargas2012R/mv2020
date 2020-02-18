
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {HomeComponent} from './home/home.component';
import {GoodReadsComponent} from './good-reads/good-reads.component';
import {HireComponent} from './hire/hire.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import  {CaseStudyComponent} from './case-study/case-study.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'good-reads', pathMatch: 'full', component: GoodReadsComponent},
  {path: 'hire', pathMatch: 'full', component: HireComponent},
  {path: "portfolio", pathMatch: 'full', component: PortfolioComponent},
  {path: 'case-study', pathMatch: 'full', component: CaseStudyComponent}
];

@NgModule({
  imports: [
    NgbModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
