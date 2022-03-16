import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator'
import { FormControl } from '@angular/forms';
import { SearchService } from '@modules/detail-profile/services/search.service';

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
  becados: Array<any> = [];

  constructor(private searchService: SearchService) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  ngOnInit(): void {
    this.searchService.searchData$().subscribe(
      res => {
        this.becados = res;
        this.pageSlice = this.becados.slice(0, 10);
        this.isLoader = false;
      }
    )

    this.searchService.getCommunities$().subscribe(
      resp => {
        this.toppingList = resp;
      }
    )
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.becados.length) {
      endIndex = this.becados.length;
    }
    this.pageSlice = this.becados.slice(startIndex, endIndex);
  }

  callSearch(term: string) {

    if (term.length < 1) {
      this.pageSlice = this.becados.slice(0, 10);
    } else

      this.pageSlice = this.filter(term.toLowerCase(), 'nombre_completo');

    return
  }

  updateProfileByComunities() {

    if (this.selectedComunity.length == undefined) {
      this.pageSlice = this.becados.slice(0, 10);
    } else
      this.pageSlice = this.filter(this.selectedComunity.toLowerCase(), 'nombre');

  }

  filter(term: string, type: 'nombre_completo' | 'nombre') {
    return this.becados.filter(object => {
      return object[type].toLowerCase().includes(term);
    });
  }
}
