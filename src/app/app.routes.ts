import { Routes } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { EarphonesComponent } from './pages/earphones/earphones.component';
import { HeadphonesComponent } from './pages/headphones/headphones.component';
import { SpeakersComponent } from './pages/speakers/speakers.component';

export const routes: Routes = [
    {
        path: ' ',
        component: HomeComponent,
        title: 'Home | Audiophile'
    },
    // {
    //     path: 'category/:id',
    //     component: CategoryComponent,
    //     title: 'Audiophile | Category',
    // },
     {
        path: 'earphones',
        component: EarphonesComponent,
        title: 'Earphones | Audiophile'
    },
     {
        path: 'headphones',
        component: HeadphonesComponent,
        title: 'Headphones | Audiophile'
    },
     {
        path: 'Speakers',
        component: SpeakersComponent,
        title: 'Speakers | Audiophile'
    },

    { path: '', redirectTo: '/home', pathMatch: 'full' }

];
// loadComponent: () =>
        // import('../app/home/home.component').then((c) => c.HomeComponent),