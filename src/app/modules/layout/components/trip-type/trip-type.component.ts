import { Component, Input, OnInit } from '@angular/core';
import { TripItemInterface } from 'src/app/shared/interfaces/trip-data-interface';

@Component({
  selector: 'app-trip-type',
  templateUrl: './trip-type.component.html',
  styleUrls: ['./trip-type.component.scss']
})
export class TripTypeComponent implements OnInit {
  @Input() tripDetails!: TripItemInterface;
  // Data comes from the parent component.

  constructor() { }

  ngOnInit(): void {
  }

}
