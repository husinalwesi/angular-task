import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Components
import { SocialUlComponent } from './components/social-ul/social-ul.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HeaderComponent } from './components/header/header.component';
// Pipes
import { LeadingZeroPipe } from './pipes/leading-zero.pipe';
// 
@NgModule({
  declarations: [SocialUlComponent, CarouselComponent, LeadingZeroPipe, HeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [SocialUlComponent, CarouselComponent, LeadingZeroPipe, HeaderComponent],
})
export class SharedModule {}
