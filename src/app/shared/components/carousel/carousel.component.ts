import { Component, Input, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from "@angular/animations";
import { tripCarouselDataInterface } from '../../interfaces/trip-data-interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ]

})
export class CarouselComponent implements OnInit {
  // Using the Non-null assertions operator explicitly indicating that the property is a Non-Nullable
  @Input() data!: tripCarouselDataInterface[];
  currentSlide: number = 0;

  constructor() { }

  ngOnInit(): void {
  }


  previousSlide() {
    // When click, it will move to the previous slide depending on the current slide index.
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.data.length - 1 : previous;
  }

  nextSlide() {
    // When click, it will move to the next slide depending on the current slide index.
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.data.length ? 0 : next;
  }

}
