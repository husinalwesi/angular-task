import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-ul',
  templateUrl: './social-ul.component.html',
  styleUrls: ['./social-ul.component.scss']
})
export class SocialUlComponent implements OnInit {
  // Using the Non-null assertions operator explicitly indicating that the property is a Non-Nullable
  @Input() ulClass!: string;
  @Input() liClass!: string;
  @Input() data!: any;
  // Data comes from the parent component.
  constructor() { }

  ngOnInit(): void {
  }

}
