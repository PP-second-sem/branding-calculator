import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainHeaderComponent } from '../../components/main-header.component/main-header.component';
import { MainFooterComponent } from '../../components/main-footer.component/main-footer.component';

@Component({
  selector: 'app-main-page',
  imports: [RouterModule, 
    MainHeaderComponent,
    MainFooterComponent
  ],
  templateUrl: './main-page.html',
  styleUrls: ['./main-page.scss'],
})
export class MainPage {}
