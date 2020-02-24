import { Component, OnInit } from '@angular/core';
import { formatDate } from "@angular/common";
import {Footer} from '../footer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footer: Footer = new Footer();
  constructor() { }

  ngOnInit() {

    this.footer.setPoweredBy("This Site Developed With Angular8+, Bootstrap4 and Amazon AWS");
    this.footer.setCompany("mvargas2.com");

    const format = 'yyyy';
    let myDate = new Date();
    const locale = 'en-US';
    const formattedDate = formatDate(myDate, format, locale);

    this.footer.setCopyright("All Right Reserved ");
  }

}
