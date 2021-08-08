import { Component, OnInit } from '@angular/core';
import { mainMenuLinksInterface } from '../../interfaces/general';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isNavbarCollapsed: boolean = false;
  mainMenuLinks: mainMenuLinksInterface[] = [//Dummy data.
    { title: "home", path: "" },
    { title: "chill adventure", path: "/offers/chill-adventure" },
    { title: "spooky times", path: "/offers/spooky-times" },
    { title: "desert madness", path: "/offers/desert-madness" },
    { title: "out in the wild", path: "/offers/out-in-the-wild" }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
