import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-links',
  templateUrl: './navigation-links.component.html',
  styleUrls: ['./navigation-links.component.css']
})
export class NavigationLinksComponent implements OnInit {

  constructor() { }

  @Input() darkNavBar: string;
  @Input() btnColor: string = "btn-outline-theme-dark";

  ngOnInit() {

  }

}
