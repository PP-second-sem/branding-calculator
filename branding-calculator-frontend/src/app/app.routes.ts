import { Routes } from '@angular/router';
import { Catalog } from './pages/catalog/catalog';
import { MainPage } from './pages/main-page/main-page';
import { authGuard } from './guards/auth.guards';
import { AdminPage } from './pages/admin/admin-page/admin-page';
export const routes: Routes = [
    {
        path: '',
        component: MainPage
    },
    {
        path: 'catalog',
        component: Catalog
    },
    {
        path: 'constructor/layouts',
        canActivate: [authGuard],
        loadComponent: () =>
            import('./pages/authorization/layouts/layouts')
            .then(m => m.Layouts)
    },
    {
        path: 'constructor/requests',
        canActivate: [authGuard],
        loadComponent: () =>
            import('./pages/authorization/requests/requests')
            .then(m => m.Requests)
    },
    {
        path: 'branding-catalog',
        canActivate: [authGuard],
        loadComponent: () =>
            import('./pages/branding-catalog/branding-catalog')
            .then(m => m.BrandingCatalog)
    },
    {
        path: 'editor/:id',
        loadComponent: () =>
            import('./pages/editor/editor')
            .then(m => m.Editor)
    },
    {
        path: 'admin',
        canActivate: [authGuard],
        component: AdminPage
    }
];
