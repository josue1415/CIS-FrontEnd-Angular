import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProfilesServicesService } from '@modules/profile/services/profiles-services.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit, OnDestroy {

  becados: Array<any> = [];
  projects: Array<any> = [];
  testimonies: Array<any> = [];

  testimonios: Array<any> = [1, 2, 3];
  isLoading: boolean = true;
  listObservers: Array<Subscription> = [];

  constructor(private profileService: ProfilesServicesService) { }

  ngOnInit(): void {
    const observer = this.profileService.getOnlytwentyBecados().subscribe(
      resp => {
        this.becados = resp,
          this.isLoading = false
      },
      error => {
        this.errorLog(error, "twentyBecados")
      }
    )

    const observerSocialProj = this.profileService.getSocialProjects().subscribe(
      resp => {
        this.projects = resp.data.slice(0, 4)
      },
      error => {
        this.errorLog(error, "SocialProject")
      }

    )

    const observerTestimonies = this.profileService.getTestimonies().subscribe(
      resp => {
        this.testimonies = resp.data.slice(0, 3)
      },
      error => {
        this.errorLog(error, "Testimonies")
      }
    )

    this.listObservers = [observer, observerSocialProj, observerTestimonies];

  }

  errorLog(errorParam: any, program: string): void {
    console.log(program, errorParam.error, errorParam.status), this.projects = errorParam.ok;
  }

  ngOnDestroy(): void {
    this.listObservers.forEach(u => u.unsubscribe);
  }
}
