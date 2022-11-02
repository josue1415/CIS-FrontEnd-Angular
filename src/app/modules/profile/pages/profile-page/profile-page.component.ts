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
  testimonios: Array<any> = [1,2,3];
  isLoading: boolean = true;
  listObservers: Array<Subscription> = [];
  constructor(private profileService: ProfilesServicesService) { }

  ngOnInit(): void {
    const observer = this.profileService.getOnlytwentyBecados().subscribe(
      resp => {
        this.becados = resp,
          this.isLoading = false
      }
    )

    this.listObservers = [observer];

  }
  ngOnDestroy(): void {
    this.listObservers.forEach(u => u.unsubscribe);
  }
}
