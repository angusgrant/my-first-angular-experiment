import { Component } from '@angular/core';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']

})
export class NavComponent {
  
  portfolio = Portfolio[];
  
  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
  }

}
