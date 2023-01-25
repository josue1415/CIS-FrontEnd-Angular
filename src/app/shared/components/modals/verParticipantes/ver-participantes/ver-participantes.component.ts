import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-ver-participantes',
  templateUrl: './ver-participantes.component.html',
  styleUrls: ['./ver-participantes.component.css']
})
export class VerParticipantesComponent implements OnInit {
  indice: string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
