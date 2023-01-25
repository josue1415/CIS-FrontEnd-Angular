import { Component, OnInit } from '@angular/core';
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

  constructor(private testimoniesService: TestimoniesService) { }

  ngOnInit(): void {

    const observer = this.testimoniesService.getTestimoniesById().subscribe(
      resp => {
        this.testimonies = resp.data
      }
    )

    this.listObservers = [observer];
      
  }
  ngOnDestroy(): void {
    this.listObservers.forEach(u => u.unsubscribe);
  }

}
