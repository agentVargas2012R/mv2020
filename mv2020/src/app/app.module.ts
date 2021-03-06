import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { GoodReadsComponent } from './good-reads/good-reads.component';
import { HireComponent } from './hire/hire.component';
import { Ng2LoadingSpinnerModule } from 'ng2-loading-spinner';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CaseStudyComponent } from './case-study/case-study.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationLinksComponent } from './navigation-links/navigation-links.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { CardComponent } from './card/card.component';
import {GoogleAnalyticsService} from "./google-analytics.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GoodReadsComponent,
    HireComponent,
    PortfolioComponent,
    CaseStudyComponent,
    FooterComponent,
    NavigationLinksComponent,
    JumbotronComponent,
    CardComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    Ng2LoadingSpinnerModule.forRoot({})
  ],
  providers: [GoogleAnalyticsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
