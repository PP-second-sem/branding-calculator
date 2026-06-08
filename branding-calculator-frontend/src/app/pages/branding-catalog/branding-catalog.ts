import { Component } from '@angular/core';
import { MainHeaderComponent } from '../../components/main-header.component/main-header.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RequestModalComponent } from '../../components/request-modal.component/request-modal.component';

@Component({
  selector: 'app-branding-catalog',
  imports: [MainHeaderComponent,
    RouterModule,
    CommonModule,
    RequestModalComponent,
  ],
  templateUrl: './branding-catalog.html',
  styleUrl: './branding-catalog.scss',
})
export class BrandingCatalog {
  public isModalOpen = false;
  public downloadGuide() {
    const link = document.createElement('a');

      link.href = '/guide.pdf';
      link.download = 'guide.pdf';

      link.click();
  }  
}
