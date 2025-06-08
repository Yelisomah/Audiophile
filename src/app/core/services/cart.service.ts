import { Injectable } from '@angular/core';


interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  // Add other properties as needed
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // constructor() { }
  
  // private cartKey = 'audiophile_cart';

  // getCart(): any[] {
  //   return JSON.parse(localStorage.getItem(this.cartKey) || '[]');
  // }

  // addToCart(product: any): void {
  //   const cart = this.getCart();
  //   cart.push(product);
  //   localStorage.setItem(this.cartKey, JSON.stringify(cart));
  // }

  // clearCart(): void {
  //   localStorage.removeItem(this.cartKey);
  
  cartItems: CartItem[] = [];

  // Your cart service methods
  addToCart(item: CartItem) {
    this.cartItems.push(item);
  }

  getCartItems() {
    return this.cartItems;
  }
}
