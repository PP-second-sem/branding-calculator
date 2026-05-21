import { Routes } from '@angular/router';
import { Catalog } from './pages/catalog/catalog';
import { MainPage } from './pages/main-page/main-page';
import { authGuard } from './guards/auth.guards';
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
            import('./pages/constructor/layouts/layouts')
            .then(m => m.Layouts)
    },
    {
        path: 'constructor/requests',
        canActivate: [authGuard],
        loadComponent: () =>
            import('./pages/constructor/requests/requests')
            .then(m => m.Requests)
    },
    {
        path: 'login',
        loadComponent: () =>
            import('./components/login-modal.component/login-modal.component')
            .then(m => m.LoginModalComponent)
    }
];
