import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { forkJoin, map, switchMap } from 'rxjs';
import { GeneratedService } from '../../../services/generated-service/generated.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../services/auth-service/auth.service';
import { LayoutPreviewModal } from '../../../components/layout-preview-modal/layout-preview-modal';

@Component({
  selector: 'app-layouts',
  imports: [RouterModule, CommonModule, LayoutPreviewModal],
  templateUrl: './layouts.html',
  styleUrl: './layouts.scss',
})
export class Layouts {
  private generatedService = inject(GeneratedService);
  private http: HttpClient = inject(HttpClient)
  layouts: any[] = [];
  private authService = inject(AuthService);
  public router: Router = inject(Router);
  public cdr: ChangeDetectorRef = inject(ChangeDetectorRef);
  logout() {
    this.authService.logout().subscribe({
      next: () => {
        this.authService.clearSession();
        this.router.navigate(['/']);
      },
      error: () => {
        // даже если сервер вернул ошибку
        this.authService.clearSession();
        this.router.navigate(['/']);
      }
    });
  }

  public goHome() {
    this.router.navigateByUrl('/')
  }
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
                map(metadata => {
                  console.log('METADATA for layout:', layout, metadata);
                  return {
                    ...layout,
                    metadata
                  }
                })
              )
          );

          return forkJoin(requests);
        })
      )
      .subscribe({
        next: (result) => {
          this.layouts = [...result];
          this.cdr.markForCheck();
        },
        error: (err) => {
          console.error(err);
        }
      });
  }
  selectedLayout: any = null;

  downloadLayout(layout: any, event: MouseEvent) {

    event.stopPropagation();

    const url = `/api/GeneratedLayout/userLayout/${layout.guid}`;

    const link = document.createElement('a');
    link.href = url;
    link.download = `${layout.guid}.zip`;
    link.click();
  }

  getLayoutTitle(layout: any): string {
    const id = layout?.metadata.templateId;

    switch (id) {
      case 1:
        return 'Визитка';

      case 2:
        return 'Бейдж';

      case 3:
        return 'Грамота';

      case 4:
        return 'Бейдж с фото';

      default:
        return 'Макет';
    }
  }

  openLayout(layout: any) {
    this.selectedLayout = layout;
  }

  closeModal() {
    this.selectedLayout = null;
  }
}