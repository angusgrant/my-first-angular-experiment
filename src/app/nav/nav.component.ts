import { Component, OnInit } from '@angular/core';
import { SlideInOutAnimation } from './animations'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations: [SlideInOutAnimation]

})
export class NavComponent implements OnInit {
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
