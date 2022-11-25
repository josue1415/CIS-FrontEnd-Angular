import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    this.stars = this.testimonio[0].stars;
  }

}
