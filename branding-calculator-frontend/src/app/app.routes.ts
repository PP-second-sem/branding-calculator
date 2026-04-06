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
    }
];
