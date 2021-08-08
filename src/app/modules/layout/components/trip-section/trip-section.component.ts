import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TripItemInterface } from 'src/app/shared/interfaces/trip-data-interface';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-trip-section',
  templateUrl: './trip-section.component.html',
  styleUrls: ['./trip-section.component.scss']
})
export class TripSectionComponent implements OnInit {
  //`!` Using the Non-null assertions operator explicitly indicating that the property is a Non-Nullable.
  @Input() isScrollChanged!: boolean;
  @ViewChild('tripSection') tripSection!: ElementRef<HTMLElement>; 
  selectedTripTypeIndex: number = 0;
  tripTypes: TripItemInterface[] = [];
  constructor(private apiService: ApiService) {
    // Inject service into component.
  }

  ngOnInit(): void {
    this.getTripData();
  }

  ngOnChanges(change: any): void {
    if(change.isScrollChanged.previousValue !== undefined) this.isScrollEmitter();    
    /* As the angular lifecycle hooks, the ngOnChanges,
       work on each input change including the initialization,
       so no need to fire the event when there is no previous value.*/
  }

  getTripData(){
    // Calling observable and subscribe the response.
    this.apiService.getJSONFile("assets/json/tripsData.json").subscribe(
      (response: TripItemInterface[]) => {
        this.tripTypes = response.map((res: TripItemInterface) => {
          // Mapping data to modify it if there is an incomplete param value.
          const result = {
            id: res.id || 0,
            key: res.key || "---",// `||` It means if there is a missing value, so replace it with a default one.  
            title: res.title || "---",
            description: res.description || "---",
            tripCarouselData: res.tripCarouselData || [],
            socialShare: res.socialShare || []
          };
          return result;
        });
      },
      (err) => {
        // In failure case.
        console.error(err);
      }
    );
  }

  isScrollEmitter(){
    // It used to scroll the view to the selected element smoothly.
    this.tripSection.nativeElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});    
  }

}
