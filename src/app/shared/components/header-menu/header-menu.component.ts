import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HeaderService } from '@shared/services/header.service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {

  @Input() isMain: true | false = true;
  @Input() isDetail: true | false = false;

  // Actually Languaje
  enLang: boolean = true;
  lang: any;

  constructor(private router: Router,
    public translate: TranslateService,
    public serviceHeader: HeaderService,
    private route: ActivatedRoute) {
    this.translate.addLangs(['en', 'es'])
    // this.translate.use('en')
  }

  ngOnInit(): void {
    if(this.translate.currentLang == undefined){
      this.serviceHeader.languaje.emit('en')
    }
  }

  Gohome() {
    this.router.navigate(['/']);
  }

  GoProfile() {
    this.router.navigate(['profiles']);

  }

  changeLang() {
    if (this.enLang) {
      this.enLang = false;
      this.translate.use('es')
    }
    else {
      this.enLang = true;
      this.translate.use('en')
    }

    this.serviceHeader.languaje.emit(this.translate.currentLang)
    // this.router.navigateByUrl(this.router.url,
    //   { skipLocationChange: true }).then(() => this.router.navigate(['/', this.router.url]));

  }
}
