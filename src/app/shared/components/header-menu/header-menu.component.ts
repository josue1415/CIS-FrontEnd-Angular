import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HeaderService } from '@shared/services/header.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {

  @Input() isMain: true | false = true;
  @Input() isDetail: true | false = false;

  // Actually Languaje
  enLang!: boolean;
  lang: any;

  listObservers: Array<Subscription> = [];

  constructor(private router: Router,
    public translate: TranslateService,
    public serviceHeader: HeaderService,
    private route: ActivatedRoute) {
    this.translate.addLangs(['en', 'es'])
    this.translate.setDefaultLang('en');
    // this.translate.use('en')
  }

  ngOnInit(): void {

    const ObserverLanguaje$ = this.serviceHeader.getPublicToken().subscribe(
      resp => {
        this.serviceHeader.setToken("Bearer  " + resp.data.token);
      },
      error => {
        console.log(error, "Error de token");
      }
    )

    this.listObservers = [ObserverLanguaje$];

  }

  ngOnDestroy(): void {
    this.listObservers.forEach(u => u.unsubscribe);
  }

  Gohome() {
    this.router.navigate(['/']);
  }

  GoProfile() {
    this.router.navigate(['profiles']);
  }

  GoProjects() {
    this.router.navigate(['projects']);
  }

  GoProjectsDetail() {
    this.router.navigate(['projects']);
  }

  GoTestimonies() {
    this.router.navigate(['testimonies']);
  }

  GoTestimoniesDetail() {
    this.router.navigate(['profiles']);
  }

  changeLang() {
    // this.enLang = this.translate.currentLang == undefined ? ;
    if (this.enLang) {
      this.enLang = false;
      this.translate.setDefaultLang('es');
      this.translate.use('es')
    }
    else {
      this.enLang = true;
      this.translate.setDefaultLang('es');
      this.translate.use('en')
    }
    this.serviceHeader.changeNav(this.translate.currentLang);
    this.serviceHeader.languaje.emit(this.translate.currentLang);
    // this.serviceHeader.languaje.next(this.translate.currentLang);
    // this.router.navigateByUrl(this.router.url,
    //   { skipLocationChange: true }).then(() => this.router.navigate(['/', this.router.url]));

  }

}
