import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfScholarshipService } from '@modules/info-beca/services/inf-scholarship.service';
import { TranslateService } from '@ngx-translate/core';
import { HeaderService } from '@shared/services/header.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.css']
})


export class InfoPageComponent implements OnInit, OnDestroy {

  becado: any; // var becados in spanish
  scholarchip: any; // var becados traducidos al ingles
  settings: any; // var configuraciones para saber que campos mostrar del becado
  family: any;
  gastos: any;
  transporte: any;
  materiales: any;
  isLangEnglish: string = ""; // verifica el idioma clickeado en el header
  isWaiting: boolean = true;
  receivedId: string = "";

  // Tables
  displayedColumnsFamily: string[] = ['nombre', 'parentesco', 'educacion_completada', 'ocupacion'];
  displayedColumnsGastos: string[] = ['concepto', 'costo'];
  displayedColumnsTransport: string[] = ['transporte', 'distancia', 'costo_mensual'];
  displayedColumnsMaterial: string[] = ['material'];


  constructor(private scholarchipService: InfScholarshipService,
    private _location: Location,
    private activatedRoute: ActivatedRoute,
    private translate: TranslateService,
    private serviceHeader: HeaderService) {
    // this.translate.addLangs(['en', 'es'])
    // this.translate.use(this.isLangEnglish)
  }

  listObservers$: Array<Subscription> = []; //Lista de observadores para ser desuscribidos luego de usarlos

  ngOnInit(): void {

    // Goin the top
    window.scroll({
      top: 0,
      left: 0
    });

    // Get Languaje clickeado en header
    const ObserverLanguaje$ = this.serviceHeader.languaje.subscribe(
      resp => {
        this.isLangEnglish = resp,
          this.translate.use(this.translate.currentLang)
      }
    );

    // Get http parameter
    const ObserverGetParameter$ = this.activatedRoute.params.subscribe(params => {
      this.receivedId = params['id'];
    });

    // Observable to change data
    const ObserverTraductions$ = this.scholarchipService.getTraduccionesBecadosById$(this.receivedId).subscribe(
      translate => {
        this.scholarchip = translate
      }
    )

    // suscribe to scholarship api
    const ObserverGetScholarchip$ = this.scholarchipService.searchDataById$(this.receivedId).subscribe(
      resp => {
        this.becado = resp,
          this.isWaiting = false;
      }
    )

    // Suscribe to setting in to DDBB scholarchip 
    const ObserverSettings$ = this.scholarchipService.becadosSettings$().subscribe(
      conf => {
        this.settings = conf
      }
    )

    const ObserveGetFamily$ = this.scholarchipService.becadosFamily$(this.receivedId).subscribe(
      family => {
        this.family = family
      }
    )

    const ObserverGastos$ = this.scholarchipService.becadosGastos$(this.receivedId).subscribe(
      gastos => {
        this.gastos = gastos
      }
    )

    const ObserverMateriales$ = this.scholarchipService.becadosMaterialHouse$(this.receivedId).subscribe(
      materiales => {
        this.materiales = materiales
      }
    )

    const ObserverTransport$ = this.scholarchipService.becadosTransporte$(this.receivedId).subscribe(
      transporte => {
        this.transporte = transporte
      }
    )


    this.listObservers$ = [ObserverLanguaje$, ObserverGetParameter$,
      ObserverGetScholarchip$, ObserverSettings$, ObserveGetFamily$,
      ObserverGastos$, ObserverMateriales$, ObserverTransport$, ObserverTraductions$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
  }

  goBack() {
    this._location.back();
  }

}
