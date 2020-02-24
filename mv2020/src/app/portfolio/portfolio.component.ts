import { ViewEncapsulation, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  theTitle: string;
  theSubtitle: string;
  theUrl: string;
  theProfile: string;
  theLeft: string;
  theRight: string;
  theBtnLabel: string;
  aDarkNavbar: string ="navbar-dark" ;

  portfolioPanels: any[];

  constructor() { }

  ngOnInit() {
    this.theTitle = "Here's What I Can Do For You";
    this.theSubtitle = "Consulting For Leadership. Strategy For Development. Founded On Best Practice Architecture.";
    this.theUrl = "https://docs.google.com/document/d/1-5PsEiavUBqz2TF6rWrpi-53N0w7jd5lSOA2QZ9ARA0/edit?usp=sharing";
    this.theLeft = "col-lg-3 col-md-3";
    this.theRight = "col-lg-9 col-md-9 my-md-5";
    this.theBtnLabel = "My Resume";

    /*
      <div class="row">
        <div class="col-md-5 text-center">
            <!-- Image Effect START-->
              <a href="https://www.leisuretimepassport.com/auth/dashboard.html?" target="blank" title="Leisure Time Passport, Interval International">
                <div class="view jarallax1" data-jarallax='{"speed": 0.2}'>
                    <div class="full-bg-img mask rgba-black-light">
                      <div class="container flex-center">

                      </div>
                    </div>
                  </div>
              </a>
              <!-- Image effect END-->
        </div>
      </div>
      */
    this.portfolioPanels = [
      {
        "site"                :     "https://www.leisuretimepassport.com/auth/dashboard.html",
        "name"             :     "Leisure Time Passport, Interval International",
        "snapshot"        :      "jarallax1",
        "icon"               :      "fas fa-globe-americas",
        "alias"              :       "Leisure Time Passport",

        "empahesis1"    :       "What It Uses: ",
        "mainContent1"  :     `This application is built with Java Technologies which include Spring, Mule, JBoss and Terracotta.
        The application was architected with a distributed approach and functions within a clustered infrastructure. The front-end is composed of HTML5, JQuery, JavaScript, SASS and Bootstrap.`,

        "empahesis2"    :       "What It Does: ",
        "mainContent2"  :     `This app allows you to travel to destinations of interest and become a member of the Interval International traveling program.`,

        "empahesis3"    :       "Who Its For:  ",
        "mainContent3"  :     `Marriott Vacations Worldwide Corporation`,
        "primaryColor"   :     "constrast3"
      },
      {
        "site"                :     "http://www.redzonemap.com/",
        "name"             :     "Redzone Map",
        "snapshot"        :      "jarallax2",
        "icon"               :      "fas fa-map-marker-alt",
        "alias"              :       "Redzone Mobile Map",

        "empahesis1"    :       "What It Uses: ",
        "mainContent1"  :     `This application is built with AWS which include AWS API Gateway, EC2, AutoScaling, CloudFront and Aurora.
        The application was architected with a distributed approach while scaling based on dynamic  infrastructure. The front-end is developed in native Android and IOS for mobile consumption. The back-end collects geospatial big data to fuel the metrics delivered to the app.`,

        "empahesis2"    :       "What It Does: ",
        "mainContent2"  :     `This app creates an alternative route based on crime history. The idea is to avoid areas where crime is most likely to occur.`,

        "empahesis3"    :       "Who Its For:  ",
        "mainContent3"  :     `Helios and Matheson Analytics Inc.,`,
        "primaryColor"   :      "constrast3",
        "secondaryColor"   :   "constrast1",
        "headingColor"  :     "contrast3"
      },
      {
        "site"                :     "http://intellipoint.academy",
        "name"             :     "Intellipoint Academy",
        "snapshot"        :      "jarallax3",
        "icon"               :      "fas fa-university",
        "alias"              :       "Intellipoint Academy",

        "empahesis1"    :       "What It Uses: ",
        "mainContent1"  :     `This application is built with the Serverless Framework and utilizes AWS Lambda, DynamoDB, API Gateway, CloudFront and S3.
        The application was architected with a statelesss and serverless approach. The front-end is composed of Angular8, Material Design, Bootstrap 4, TypeScript and JavaScript.`,

        "empahesis2"    :       "What It Does: ",
        "mainContent2"  :     `This app allows you to enroll into courses about tech.`,

        "empahesis3"    :       "Who Its For:  ",
        "mainContent3"  :     `DevOps Engineers, Developers, Entrepreneurs, Students and for anyone with a curious soul.`,
        "primaryColor"   :      "constrast3",
        "secondaryColor"   :   "constrast1",
        "headingColor"  :     "contrast2"
      }
    ];
  }

}
