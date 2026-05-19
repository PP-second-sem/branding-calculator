import { Routes } from '@angular/router';
import { Catalog } from './pages/catalog/catalog';
import { MainPage } from './pages/main-page/main-page';
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
        loadComponent: () =>
            import('./pages/constructor/layouts/layouts')
            .then(m => m.Layouts)
    },
    {
        path: 'constructor/requests',
        loadComponent: () =>
            import('./pages/constructor/requests/requests')
            .then(m => m.Requests)
    }
];
