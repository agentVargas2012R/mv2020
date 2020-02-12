import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-good-reads',
  templateUrl: './good-reads.component.html',
  styleUrls: ['./good-reads.component.css']
})
export class GoodReadsComponent implements OnInit {

  private showSpinner: boolean = true;

  constructor() {
      setTimeout(() => {
        this.showSpinner = false;
      }, 1500);
   }

  ngOnInit() {
  }

}
