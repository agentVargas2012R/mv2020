import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() src: string;
  @Input()  title: string;
  @Input()  headline: string;
  @Input()  cardText: string;
  @Input()  btnLink: string;
  @Input() action: string;

  constructor() { }

  ngOnInit() {

  }

}
