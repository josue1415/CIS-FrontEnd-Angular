import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-fotografias',
  templateUrl: './ver-fotografias.component.html',
  styleUrls: ['./ver-fotografias.component.css']
})
export class VerFotografiasComponent implements OnInit {

  list: any | null = null;

  constructor() { }

  ngOnInit(): void {

  }

}
