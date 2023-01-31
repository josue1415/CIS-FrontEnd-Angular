import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-ver-participantes',
  templateUrl: './ver-participantes.component.html',
  styleUrls: ['./ver-participantes.component.css']
})
export class VerParticipantesComponent implements OnInit {

  list: any | null = null; //Puede recibir imagenes o asistencias

  constructor() { }

  ngOnInit(): void {
    
  }

}
