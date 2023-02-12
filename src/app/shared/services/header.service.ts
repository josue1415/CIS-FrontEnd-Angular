import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  public languaje: EventEmitter<any> = new EventEmitter<any>();

  private _navItemSource = new BehaviorSubject<string>('en');
  // Observable navItem stream
  navItem$ = this._navItemSource.asObservable();
  // service command
  changeNav(number: string) {
    this._navItemSource.next(number);
  }

  constructor() {
  }

}
