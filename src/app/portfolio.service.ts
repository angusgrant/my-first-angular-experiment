import { Injectable } from '@angular/core';

import {Portfolio} from './portfolio';
import { PORTFOLIO } from './mock-portfolio';
import { Observable, of} from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private messageService: MessageService) { }

  getPortfolio(): Observable<Portfolio[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('PortfolioService: fetched portfolio');
     return of (PORTFOLIO)
    }
}
