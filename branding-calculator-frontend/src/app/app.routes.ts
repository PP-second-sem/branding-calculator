import { Routes } from '@angular/router';
import { Catalog } from './pages/catalog/catalog';
import { MainPage } from './pages/main-page/main-page';
import { FilterDrawer } from './components/filter-drawer.component/filter-drawer.component';

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
        path: 'drawer',
        component: FilterDrawer
    }
];
