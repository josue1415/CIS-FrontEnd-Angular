import { Component, OnInit } from '@angular/core';
import { TestimoniesService } from '@modules/testimonies/services/testimonies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-testimonies',
  templateUrl: './testimonies.component.html',
  styleUrls: ['./testimonies.component.scss']
})
export class TestimoniesComponent implements OnInit {

  testimonio: any[] = [
    {
      "stars": 4,
      "nombre": "Juan Perez"
    }
  ];

  stars: number = 0;
  listObservers: Array<Subscription> = [];
  testimonies: any;

  constructor(private testimoniesService: TestimoniesService) { }

  ngOnInit(): void {
    this.stars = this.testimonio[0].stars;

    const observer = this.testimoniesService.getTestimoniesById().subscribe(
      resp => {
        this.testimonies = resp.data,       console.log(this.testimonies);

      }
    )

    this.listObservers = [observer];
      
  }
  ngOnDestroy(): void {
    this.listObservers.forEach(u => u.unsubscribe);
  }

}
