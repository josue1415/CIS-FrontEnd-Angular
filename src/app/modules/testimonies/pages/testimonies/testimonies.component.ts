import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestimoniesService } from '@modules/testimonies/services/testimonies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-testimonies',
  templateUrl: './testimonies.component.html',
  styleUrls: ['./testimonies.component.scss']
})
export class TestimoniesComponent implements OnInit {

  stars: number = 0;
  listObservers: Array<Subscription> = [];
  testimonies: any;
  receivedId: string = ""; //Get ID by parameters in header


  constructor(private testimoniesService: TestimoniesService, private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    // Get http parameter
    const ObserverGetParameter$ = this.activatedRoute.params.subscribe(params => {
      this.receivedId = params['id'];
    });

    const observer = this.testimoniesService.getTestimoniesById(1).subscribe( //receivedId
      resp => {
        this.testimonies = resp.data
      }
    )

    this.listObservers = [observer, ObserverGetParameter$];

  }
  ngOnDestroy(): void {
    this.listObservers.forEach(u => u.unsubscribe);
  }

}
