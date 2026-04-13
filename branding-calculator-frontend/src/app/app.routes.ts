import { Routes } from '@angular/router';
import { Catalog } from './pages/catalog/catalog';
import { MainPage } from './pages/main-page/main-page';
import { CardModalComponent } from './components/card-modal.component/card-modal.component';
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
        path: 'modal',
        component: CardModalComponent
    }
];
