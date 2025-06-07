import { Routes } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        component: HomeComponent,
        title: 'Audiophile | Home'
    },
    {
        path: 'category/:id',
        component: CategoryComponent,
        title: 'Audiophile | Category',
    }




];
// loadComponent: () =>
        // import('../app/home/home.component').then((c) => c.HomeComponent),