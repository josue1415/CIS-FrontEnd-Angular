import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  public languaje: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

}
