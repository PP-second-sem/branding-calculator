import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { forkJoin, map, switchMap } from 'rxjs';
import { GeneratedService } from '../../../services/generated-service/generated.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../services/auth-service/auth.service';

@Component({
  selector: 'app-layouts',
  imports: [RouterModule, CommonModule],
  templateUrl: './layouts.html',
  styleUrl: './layouts.scss',
})
export class Layouts {
  private generatedService = inject(GeneratedService);
  private http: HttpClient = inject(HttpClient)
  layouts: any[] = [];
  private authService = inject(AuthService);

  get currentUser() {
    return this.authService.currentUser();
  }

  ngOnInit() {
    this.loadLayouts();
  }

  loadLayouts() {
    this.http.get<any[]>('/api/GeneratedLayout/userLayouts/mine')
      .pipe(
        switchMap(layouts => {

          const requests = layouts.map(layout =>
            this.http.get(`/api/GeneratedLayout/userLayout/${layout.guid}/metadata`)
              .pipe(
                map(metadata => ({
                  ...layout,
                  metadata
                }))
              )
          );

          return forkJoin(requests);
        })
      )
      .subscribe({
        next: (result) => {
          this.layouts = result;
          console.log('LAYOUTS WITH METADATA:', result);
        },
        error: (err) => {
          console.error(err);
        }
      });
  }
}