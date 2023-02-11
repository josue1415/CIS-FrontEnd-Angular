import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator'
import { FormControl } from '@angular/forms';
import { SearchService } from '@modules/detail-profile/services/search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-profile',
  templateUrl: './detail-profile.component.html',
  styleUrls: ['./detail-profile.component.css']
})
export class DetailProfileComponent implements OnInit {

  isLoader = true;
  src: string = "";
  // toppings = new FormControl();
  // List of communities
  toppingList: Array<any> = [];
  // To set from formModule, Selected commmunitie
  selectedComunity: any;
  pageSlice: Array<any> = [];
  ListGlobal: Array<any> = [];
  product: any;
  redirect: string = "";
  error: any = "NO";

  constructor(private searchService: SearchService, private activatedroute: ActivatedRoute) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  ngOnInit(): void {
    // Obtiene el tipo de la data, dependiendo si es becado, proyectos sociales y testimonios.
    this.activatedroute.data.subscribe(data => {
      this.product = data.tipo;
    })

    switch (this.product) {
      case 'projects':
        this.redirect = "detail-project";
        // Obtiene todos los proyectos
        this.searchService.searchDataProjects$().subscribe(
          res => {
            this.ListGlobal = res.data;
            this.pageSlice = this.ListGlobal.slice(0, 10);
            this.isLoader = false;
          },
          error => {
            this.errorLog(error, "projects")
          }
        )
        // Filtrado para Becados, obtiene las comunidades
        this.searchService.getCommunities$().subscribe(
          resp => {
            this.toppingList = resp;
          },
          error => {
            this.errorLog(error, "Communities")
          }
        )
        break;

      case 'testimonies':
        this.redirect = "detail-testimonies";
        // Obtiene todos los testimonios
        this.searchService.searchDataTestimonies$().subscribe(
          res => {
            this.ListGlobal = res.data;
            // this.pageSlice = this.ListGlobal;
            this.pageSlice = this.ListGlobal.slice(0, 10);
            this.isLoader = false;
          },
          error => {
            this.errorLog(error, "testimonies")
          }
        )
        // Filtrado para Becados, obtiene las comunidades
        this.searchService.getCommunities$().subscribe(
          resp => {
            this.toppingList = resp;
          },
          error => {
            this.errorLog(error, "comunities")
          }
        )
        break;

      default:
        this.redirect = "detail";
        // Obtiene todos los becados
        this.searchService.searchDataBecados$().subscribe(
          res => {
            this.ListGlobal = res;
            this.pageSlice = this.ListGlobal.slice(0, 10);
            this.isLoader = false;

          },
          error => {
            this.errorLog(error, "becados")
          }
        )
        // Filtrado para Becados, obtiene las comunidades
        this.searchService.getCommunities$().subscribe(
          resp => {
            this.toppingList = resp;
          },
          error => {
            this.errorLog(error, "comunities")
          }
        )
        break;
    }
  }

  errorLog(errorParam: any, program: string): void {
    console.log(program, errorParam.error, errorParam.status), this.error = errorParam.ok;
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.ListGlobal.length) {
      endIndex = this.ListGlobal.length;
    }
    this.pageSlice = this.ListGlobal.slice(startIndex, endIndex);
  }

  callSearch(term: string) {

    if (term.length < 1) {
      this.pageSlice = this.ListGlobal.slice(0, 10);
    } else

      this.pageSlice = this.filter(term.toLowerCase(), 'nombre_completo');

    return
  }

  updateProfileByComunities() {

    if (this.selectedComunity.length == undefined) {
      this.pageSlice = this.ListGlobal.slice(0, 10);
    } else
      this.pageSlice = this.filter(this.selectedComunity.toLowerCase(), 'nombre');

  }

  filter(term: string, type: 'nombre_completo' | 'nombre') {
    return this.ListGlobal.filter(object => {
      return object[type].toLowerCase().includes(term);
    });
  }
}
