import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showSpinner: boolean = true;

  heading: string;
  title: string;
  subtitle: string;
  leads: any[];
  desktop: any[];
  constructor() {
      setTimeout(() => {
        this.showSpinner = false;
      }, 1500);
   }

  ngOnInit() {
    this.title = "Hey, I’m Mike";
    this.subtitle = "";

    this.leads = [
      "An architect, app developer and traveler living in the Miami, FL area.",
      "My days are filled with creating enterprise applications for my clients and company, Intellipoint, while focusing mainly on Full-Stack development in the cloud."
    ];

    this.desktop = [
      "Creative IT Teaching Is My Passion,",
      "Living Life To The Fullest Is My Dream. "
    ];
  }

}
