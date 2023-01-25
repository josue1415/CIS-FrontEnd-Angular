import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '@modules/projects/services/projects.service';
import { VerFotografiasComponent } from '@shared/components/modals/verFotografias/ver-fotografias/ver-fotografias.component';
import { VerParticipantesComponent } from '@shared/components/modals/verParticipantes/ver-participantes/ver-participantes.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  modalRef: MdbModalRef<ProjectsComponent> | null = null;

  listObservers: Array<Subscription> = [];
  project: any;
  isFoto: Boolean = false;

  constructor(private modalService: MdbModalService, private projectsService: ProjectsService) { }

  openModal(tipo: string, indice: number) {
    this.isFoto = tipo == 'foto' ? true : false;
    this.modalRef = this.modalService.open(
      !this.isFoto ? VerParticipantesComponent : VerFotografiasComponent, {
      modalClass: 'modal-lg',
      data: { indice: indice, list: this.isFoto ? this.project.actividades[indice].fotografias : null }
    })
  }

  ngOnInit(): void {
    const observer = this.projectsService.getProjectById(1).subscribe(
      resp => {
        this.project = resp.data, console.log(this.project);
      }
    )
    this.listObservers = [observer];
  }

  ngOnDestroy(): void {
    this.listObservers.forEach(u => u.unsubscribe);
  }

}
