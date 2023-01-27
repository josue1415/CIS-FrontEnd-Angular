import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  images: any[] = [];
  threeProjects: any[] = [];

  receivedId: String = "";

  constructor(private modalService: MdbModalService,
    private projectsService: ProjectsService,
    private activatedRoute: ActivatedRoute) { }

  openModal(tipo: string, indice: number) {
    this.isFoto = tipo == 'foto' ? true : false;
    this.modalRef = this.modalService.open(
      !this.isFoto ? VerParticipantesComponent : VerFotografiasComponent, {
      modalClass: 'modal-lg',
      data: { list: this.isFoto ? this.project.actividades[indice].fotografias : null }
    })
  }

  ngOnInit(): void {

    // Get http parameter
    const ObserverGetParameter$ = this.activatedRoute.params.subscribe(params => {
      this.receivedId = params['id'];
    });

    const observer = this.projectsService.getProjectById(1).subscribe( //receivedId
      resp => {
        this.project = resp.data, this.getImages();
      }
    )

    const observerAll = this.projectsService.getProjects().subscribe(
      resp => {
        this.threeProjects = resp.data.slice(0, 3), console.log(this.threeProjects);
      }
    )

    this.listObservers = [observer, observerAll];
  }

  getImages(): void {
    for (const activ of this.project.actividades) {
      for (const imag of activ.fotografias) {
        this.images.push({ img: imag.downloadUrl, caption: imag.caption, descrip: imag.description });
      }
    }
  }

  ngOnDestroy(): void {
    this.listObservers.forEach(u => u.unsubscribe);
  }

}
