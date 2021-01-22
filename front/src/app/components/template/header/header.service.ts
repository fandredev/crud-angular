import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header-data-model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerData = new BehaviorSubject<HeaderData<string>>({
    title: 'Ínicio',
    icon: 'home',
    routeUrl: ''
  })

  constructor() { }

  get headerData() : HeaderData<string> {
    return this._headerData.value
  }

  set headerData(headerData: HeaderData<string>) {
    this._headerData.next(headerData)
  }
}
