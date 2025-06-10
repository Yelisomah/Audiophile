import { Routes } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component';
import { EarphonesComponent } from './pages/earphones/earphones.component';
import { HeadphonesComponent } from './pages/headphones/headphones.component';
import { SpeakersComponent } from './pages/speakers/speakers.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';


export const routes: Routes = [
    {   
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full' 
    },
    {
        path: 'home',
        component: HomeComponent,
        title: 'Home | Audiophile'
    },
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
        path: 'speakers',
        component: SpeakersComponent,
        title: 'Speakers | Audiophile'
    },
    {
        path: 'product/:id',
        component: ProductDetailsComponent,
        title: 'Product Details | Audiophile'
    },
    {
        path: '**',
        redirectTo: 'home'
    }
   

];
