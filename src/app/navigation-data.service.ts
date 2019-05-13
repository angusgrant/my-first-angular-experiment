import { Injectable } from '@angular/core';

import {Navigation} from './navigation-data';
import { MENU } from './mock-naviagtion-data';
import { Observable, of} from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationDataService {

  constructor(private messageService: MessageService) { }

  getMenu(): Observable<Navigation[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('NavigationDataService: fetched navigation');
     return of (MENU)
    }
}