import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-home-section',
  templateUrl: './main-home-section.component.html',
  styleUrls: ['./main-home-section.component.scss']
})
export class MainHomeSectionComponent implements OnInit {
  @Output() isScrollEmitter = new EventEmitter();//We will pass a flag to a parent component since the section is there.
  toggleScroll: boolean = false;//We toggle the flag to make the change occur.
  mainSectionImage: string = "../assets/images/home-bg.jpg";//We put the image URL from TypeScript since if we will get it from API
  socialShare: any = [//Dummy data
    { key: "twitter", url: "https://twitter.com/MajidAlFuttaim"},
    { key: "instagram", url: "https://www.instagram.com/majidalfuttaim"},
    { key: "facebook", url: "https://facebook.com/MajidAlFuttaim"}
  ]

  constructor() { }  

  ngOnInit(): void {
  }

  scrollToElement(){
    this.toggleScroll = !this.toggleScroll;
    this.isScrollEmitter.emit(this.toggleScroll);
    // Once clicked, we toggle the flag, then emitting event is fire.
  }

}