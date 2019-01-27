import { Component, OnInit } from '@angular/core';

import { PortfolioService } from '../portfolio.service';
import {Portfolio} from '../portfolio';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']

})
export class NavComponent implements OnInit {
  
  portfolio: Portfolio[];
  
  constructor(private portfolioService: PortfolioService) { }

  getPortfolio(): void {
    this.portfolioService.getPortfolio()
        .subscribe(portfolio => this.portfolio = portfolio)
  }

  ngOnInit() {
    this.getPortfolio();
  }



}
