import { ViewEncapsulation, Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
