import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PortfolioService } from '../portfolio.service';
import {Portfolio} from '../portfolio';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']

})
export class NavComponent implements OnInit {
  
  portfolio: Portfolio[];
  
  constructor( private route: ActivatedRoute, 
               private portfolioService: PortfolioService,
               private location: Location) { }

  ngOnInit() {
    this.getPortfolio();
  }

  getPortfolio(): void {
    this.portfolioService.getPortfolio()
        .subscribe(portfolio => this.portfolio = portfolio);
  }





}
