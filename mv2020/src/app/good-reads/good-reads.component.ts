import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-good-reads',
  templateUrl: './good-reads.component.html',
  styleUrls: ['./good-reads.component.css']
})
export class GoodReadsComponent implements OnInit {

  private showSpinner: boolean = true;
  quote: string;
  leader: string;
  headingQuote: string;

  deck1: any[];
  deck2: any[];

  constructor() {
      setTimeout(() => {
        this.showSpinner = false;
      }, 1500);
   }

  ngOnInit() {

    this.quote = "\"LIVE AS IF YOU WERE TO DIE TOMORROW. LEARN AS IF YOU WERE TO LIVE FOREVER.\"";
    this.leader = "- MAHATMA GANDHI";
    this.headingQuote = "\"The heart of the discerning acquires knowledge, for the ears of the wise seek it out.\" - Proverbs 18:15 ";

    this.deck2 = [
      {
        "src"          :  "../../assets/images/FourHourWorkWeek.jpg",
        "title"         :  "The Four Hour Work Week",
        "headline"   : "For The Entrepreneur Spirit",
        "cardText"  : `This book literally changed my mindset when it comes to work. Everything from productivity, efficiency, time management and progressive thinking.`,
        "btnLink"    : "https://www.amazon.com/4-Hour-Workweek-Anywhere-Expanded-Updated/dp/B0031KN6T8/ref=sr_1_1?keywords=the+four+hour+work+week&qid=1580947555&s=audible&sr=1-1",
        "action"      : "Listen..."
      },
      {
        "src"          :  "../../assets/images/AWSSolutionArch.jpg",
        "title"         :  "AWS",
        "headline"   : "Cloud Computing",
        "cardText"  : `Do You Know Cloud Computing?\nWhere Do You Think This Is Running Right Now, Schnukums?`,
        "btnLink"    : "https://www.amazon.com/Certified-Solutions-Architect-Official-Study-ebook/dp/B01M6W6WYD/ref=sr_1_4?keywords=aws+official+solution+architect+associate&qid=1580947976&s=digital-text&sr=1-4",
        "action"      : "Read..."
      },
      {
        "src"          :  "../../assets/images/Refactoring.jpg",
        "title"         :  "Refactoring",
        "headline"   : "Maintaining Shit?",
        "cardText"  : `If you're going to maintain something, make it yours baby!!!\n
                            Write Your Test Cases, Integration Tests, Don't Forget Your Variable Names, Your Methods, Follow Those Language Rules.\n\n
                            Tackle That Hard Stuff.\n
                            Suck It Up, Buttercup!!`,
        "btnLink"    : "https://www.amazon.com/Refactoring-Improving-Existing-Addison-Wesley-Technology-ebook/dp/B007WTFWJ6/ref=sr_1_2?keywords=Refactoring+by+Martin+Fowler&qid=1580948678&s=digital-text&sr=1-2",
        "action"      : "Read..."
      }
    ];

    this.deck1 = [
      {
        "src"          :  "../../assets/images/Mastery.jpg",
        "title"         :  "Mastery",
        "headline"   : "by Robert Greene",
        "cardText"  : `Master Your Craft Like A Boss!`,
        "btnLink"    : "https://www.amazon.com/Unknown-Mastery/dp/B00A6G9CGG/ref=sr_1_1?keywords=mastery&qid=1580945691&sr=8-1",
        "action"      : "Listen..."
      },
      {
        "src"          :  "../../assets/images/HeadFirstJavaDesignPatterns.jpg",
        "title"         :  "Head First Design Patterns",
        "headline"   : "Raise Your MVC Game.",
        "cardText"  : `Design Patterns Matter`,
        "btnLink"    : "https://www.amazon.com/Head-First-Design-Patterns-Brain-Friendly/dp/0596007124/ref=sr_1_1?keywords=head+first+design+patterns&qid=1580946365&sr=8-1",
        "action"      : "Read..."
      },
      {
        "src"          :  "../../assets/images/10xRule.jpg",
        "title"         :  "The 10X Rule",
        "headline"   : "Get'er Done",
        "cardText"  : `This Helps With Time.\n
                            Remember Kiddies, Time Waits For No One.\n
                            I always look at things from different perspectives, especially when it comes to industries.\n
                            The world can learn alot from effective Sales and Marketing.`,
        "btnLink"    : "https://www.amazon.com/10X-Rule-Difference-Between-Success/dp/B005DGW34C/ref=sr_1_1?crid=2A3Q4ODMHBX2E&keywords=10x+rule+by+grant+cardone&qid=1580946960&sprefix=10x+rule+%2Caps%2C376&sr=8-1",
        "action"      : "Listen..."
      }
    ];
  }

}
