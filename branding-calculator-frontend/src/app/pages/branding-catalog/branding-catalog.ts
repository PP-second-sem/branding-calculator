import { Component } from '@angular/core';
import { MainHeaderComponent } from '../../components/main-header.component/main-header.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-branding-catalog',
  imports: [MainHeaderComponent,
    RouterModule,
    CommonModule
  ],
  templateUrl: './branding-catalog.html',
  styleUrl: './branding-catalog.scss',
})
export class BrandingCatalog {}
