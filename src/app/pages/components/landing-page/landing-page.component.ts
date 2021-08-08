import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  isScrollChanged: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  isScrollEmitter(event: boolean){
    this.isScrollChanged = event;
  }

}
