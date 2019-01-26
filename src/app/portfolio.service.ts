import { Injectable } from '@angular/core';

import {Portfolio} from './portfolio';
import { PORTFOLIO } from './mock-portfolio';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {


  getPortfolio(): Portfolio[] {
     return PORTFOLIO 
    }
}
