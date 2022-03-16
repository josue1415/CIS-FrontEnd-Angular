import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as AOS from 'aos'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'webBecados';

  constructor(public translate: TranslateService) {
    this.translate.addLangs(['en', 'es'])
    this.translate.setDefaultLang('en')
  }

  ngOnInit() {
    AOS.init({
      disable: 'mobile'
    });
  }

}
