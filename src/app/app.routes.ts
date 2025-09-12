import { Routes } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component';
import { EarphonesComponent } from './pages/earphones/earphones.component';
import { HeadphonesComponent } from './pages/headphones/headphones.component';
import { SpeakersComponent } from './pages/speakers/speakers.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';


export const routes: Routes = [
    {   
        path: 'home', 
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
        path: 'cart',
        component: CartComponent,
        title: 'Cart | Audiophile'
    },
    {
        path: 'checkout',
        component: CheckoutComponent,
        title: 'Checkout | Audiophile'
    },
    {
        path: 'confirmation',
        component: ConfirmationComponent,
        title: 'Confirmation | Audiophile'
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
