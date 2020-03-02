import { Injectable } from '@angular/core';

declare let ga:Function; // Declare ga as a function

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  constructor() {

  }

  //create our event emitter to send our data to Google Analytics
  public eventEmitter(eventCategory: string, eventAction: string,
                                  eventLabel: string = null) {

        ga('create', 'UA-69263787-2', 'auto');
        ga('send', {
          hitType: 'event',
          eventCategory: eventCategory,
          eventAction: eventAction,
          eventLabel: eventLabel
        });

    }
}
