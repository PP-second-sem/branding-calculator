import { Routes } from '@angular/router';
import { MainPage } from './pages/main-page/main-page';
import { ConstructorPage } from './pages/constructor-page/constructor-page';

export const routes: Routes = [
    {
        path: '',
        component: MainPage
    },
    {
        path: 'constructor',
        component: ConstructorPage
    }
];
