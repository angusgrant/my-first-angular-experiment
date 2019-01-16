import { Component, OnInit } from '@angular/core';
import { SlideInOutAnimation } from '../animations'
@Component({
  selector: 'nav-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css'],
  animations: [SlideInOutAnimation]
})
export class HamburgerMenuComponent implements OnInit {
  
  animationState = 'out';

  toggleShowDiv(divName: string) {
    if (divName === 'divA') {
      console.log(this.animationState);
      this.animationState = this.animationState === 'out' ? 'in' : 'out';
      console.log(this.animationState);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
