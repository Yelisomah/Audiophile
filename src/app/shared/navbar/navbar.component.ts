import { Component } from '@angular/core';
// import { CartComponent } from '../../pages/cart/cart.component';
import { CartService } from '../../core/services/cart.service';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [ RouterLinkActive, RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public cartService: CartService) {}
}
