import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestimoniesService } from '@modules/testimonies/services/testimonies.service';
import { TranslateService } from '@ngx-translate/core';
import { HeaderService } from '@shared/services/header.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-testimonies',
  templateUrl: './testimonies.component.html',
  styleUrls: ['./testimonies.component.scss']
})
export class TestimoniesComponent implements OnInit {

  stars: number = 0;
  listObservers: Array<Subscription> = [];
  testimonies: any;
  receivedId: string = ""; //Get ID by parameters in header
  isLoader = true;

  Lang: string = ""; // verifica el idioma clickeado en el header

  constructor(private testimoniesService: TestimoniesService,
    private activatedRoute: ActivatedRoute,
    private serviceHeader: HeaderService,
    private translate: TranslateService,
  ) { }

  ngOnInit(): void {

    // Get http parameter
    const ObserverGetParameter$ = this.activatedRoute.params.subscribe(params => {
      this.receivedId = params['id'];
    });

    // Get Languaje clickeado en header
    const ObserverLanguaje$ = this.serviceHeader.navItem$
      .subscribe(item => {
        this.Lang = item,  this.testimoniesService.getTestimoniesById(this.receivedId, this.Lang).subscribe(
          resp => {
            this.testimonies = resp.data, this.isLoader = false
          },
          error => {
            this.errorLog(error, "No existe testimonio")
          }
        )
      });

    this.listObservers = [ObserverGetParameter$, ObserverLanguaje$];

  }
  ngOnDestroy(): void {
    this.listObservers.forEach(u => u.unsubscribe);
  }

  errorLog(errorParam: any, program: string): void {
    console.log(program, errorParam.error, errorParam.status)
  }

}
