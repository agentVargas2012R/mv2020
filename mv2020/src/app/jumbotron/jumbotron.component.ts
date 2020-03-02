import { ViewEncapsulation, Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';

import {GoogleAnalyticsService} from '../google-analytics.service';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class JumbotronComponent implements OnInit {

  @Input() title: string;
  @Input()  subtitle: string;
  @Input()  url: string;
  @Input() profile: string;
  @Input() left: string;
  @Input() right: string;
  @Input() btnLabel: string;
  @Input() styles:string;
  @Input() jumbotron: string;
  @Input() align: string;
  @Input() icon1: string;
  @Input() icon2: string;
  @Input() effect1: string;
  route: Router;

  constructor(public googleAnalyticsService: GoogleAnalyticsService) { }

  ngOnInit() {

  }

  sendEvent() {
    this.googleAnalyticsService.eventEmitter(this.btnLabel, "click", this.url);
  }
}
