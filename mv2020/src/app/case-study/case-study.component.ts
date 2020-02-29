import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.css']
})
export class CaseStudyComponent implements OnInit {

  theTitle: string;
  theSubtitle: string;
  theUrl: string;
  theProfile: string;
  theLeft: string;
  theRight: string;
  theBtnLabel: string;
  theStyles:string;
  theJumbotron: string;
  theAlign:string;
  fontAwesome1: string;
  fontAwesome2: string;
  caseStudyPanels: any[];
  aDarkNavbar: string ="navbar-dark" ;

  constructor() { }

  ngOnInit() {

    this.theTitle = "Serverless Architecture";
    this.theSubtitle = "How I Convinced Redzone";
    this.theUrl = "https://docs.google.com/document/d/1-5PsEiavUBqz2TF6rWrpi-53N0w7jd5lSOA2QZ9ARA0/edit?usp=sharing";
    //this.theLeft = "col-lg-3 col-md-3";
    this.theRight = "col-lg-12 col-md-12 my-md-5 text-center";
    this.theBtnLabel = "My Definitive Guide";
    this.theJumbotron = "jumbotron-bg-red";
    this.theAlign = " text-center";
    this.fontAwesome1 = "fas fa-server pad-right";
    this.fontAwesome2 = "fas fa-book";

    this.caseStudyPanels = [
      {
          "fontColor" :     "textSecondary",
          "heading"   :     "The Goals",
          "icon"         :    "fas fa-check pad-right",
          "bullet1"     :    "Educate:",
          "desc1"       :    `Demonstrate a well-conducted research white paper that showcases the serverless application strategies of the future.`,
          "bullet2"     :    "Engage:",
          "desc2"       :    `The entire audience about the possibilities with Serverless Technologies and how it can position the Business.`,
          "bullet3"     :    "Elevate:",
          "desc3"       :   `Does the current approach, strategy and overall capacities of systems which include monetary, individual and systematic constraints, meet the future needs of the business?`,
          "effect1"     :   "animated lightSpeedIn"

      },
      {
        "animation" :   "delay-2s",
        "fontColor" :     "font2",
        "heading"   :     "The Approach",
        "icon"         :    "fas fa-check",
        "bullet1"     :    "Terminology:",
        "desc1"       :    `Introduce common vocabulary and terminology used throughout the industry to level-set an audience for a deeper and more meaningful project experience.`,
        "bullet2"     :    "Comparative Analysis: ",
        "desc2"       :    `Discuss the key differences between traditional cloud methodologies and the benefits and drawbacks of a serverless technology.`,
        "bullet3"     :    "Convince:",
        "desc3"       :   `Upper Management and Development Engineering that this venture was worth going for.`,
        "effect1"     :   "animated delay-2s lightSpeedIn"
      },
      {
        "animation" :   "delay-4s",
        "fontColor" :     "text-success",
        "heading"   :     "The Result",
        "icon"         :    "fas fa-check",
        "bullet1"     :    "Savings:",
        "desc1"       :    `Redzone Map Savings: +$108,000.00/yr`,
        "bullet2"     :    "DevOps: ",
        "desc2"       :    `By significantly reducing overhead cost from traditional resources, DevOps and Dev Teams Resources could focus on Business Innovations instead of a keeping-the-lights-on mentality. `,
        "bullet3"     :    "Dynamic Performance:",
        "desc3"       :   `Performance of the application more than halved once cache aside and lambda concurrency was in affect resulting in less than 3 second searches while dealing with higher levels of peak traffic.`,
        "effect1"     :   "animated delay-4s lightSpeedIn"
      }
    ];
  }

}
