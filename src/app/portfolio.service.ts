import { Injectable } from '@angular/core';
import { PORTFOLIO } from './mock-portfolio';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  getPortfolio() { return PORTFOLIO }
}
