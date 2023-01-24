import { Component, OnInit } from '@angular/core';
import { VerParticipantesComponent } from '@shared/components/modals/verParticipantes/ver-participantes/ver-participantes.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  modalRef: MdbModalRef<ProjectsComponent> | null = null;

  constructor(private modalService: MdbModalService) {}

  openModal() {
    this.modalRef = this.modalService.open(VerParticipantesComponent, {
      modalClass: 'modal-lg'
    })
  }

  ngOnInit(): void {
  }

}
