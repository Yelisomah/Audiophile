import { Component, Injectable, OnInit } from '@angular/core';
// import { CartService } from '../../core/services/cart.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent {
  // cartItems: any[] = [];

  // constructor(private cartService: CartService) {}

  // ngOnInit(): void {
  //   this.cartItems = this.cartService.getCartItems();
  // }

  // getTotal(): number {
  //   return this.cartItems.reduce((sum, item) => sum + item.price, 0);
  // }
}
