import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Components
import { SocialUlComponent } from './components/social-ul/social-ul.component';
// 
@NgModule({
  declarations: [SocialUlComponent],
  imports: [CommonModule, RouterModule],
  exports: [SocialUlComponent],
})
export class SharedModule {}
