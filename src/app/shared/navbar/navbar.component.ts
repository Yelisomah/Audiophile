import { Component } from '@angular/core';
// import { CartComponent } from '../../pages/cart/cart.component';
import { CartService } from '../../core/services/cart.service';
import { RouterLinkActive, RouterLink, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
// import { FooterComponent } from '../footer/footer.component';  

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ RouterLinkActive, RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  currentPageTitle: string = 'Home';
  // constructor(public cartService: CartService) {}

  routerLinkActiveOptions = { exact: true };

  constructor(
    private router: Router,
    public cartService: CartService
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updatePageTitle();
    });
  }


  private updatePageTitle(): void {
    const currentRoute = this.router.url;
    switch (currentRoute) {
      case 'home':
        this.currentPageTitle = 'Home';
        break;
      case 'headphones':
        this.currentPageTitle = 'Headphones';
        break;
      case 'speakers':
        this.currentPageTitle = 'Speakers';
        break;
      case 'earphones':
        this.currentPageTitle = 'Earphones';
        break;
      case 'cart':
        this.currentPageTitle = 'Cart';
        break;
      default:
        this.currentPageTitle = 'Home';
    }
  }


  navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  onClickHome(event: MouseEvent): void {
    // event.preventDefault();
    this.router.navigate(['home']);
  }

  onClickHeadphones(event: MouseEvent): void {
    // event.preventDefault();
    this.router.navigate(['headphones']);
  }
  onClickSpeakers(event: MouseEvent): void {
    // event.preventDefault();
    this.router.navigate(['speakers']);
  }

  onClickEarphones(event: MouseEvent): void {
    // event.preventDefault();
    this.router.navigate(['earphones']);
  }
  onClickCart(event: MouseEvent): void {
    // event.preventDefault();
    this.router.navigate(['cart']);
  }
  isMenuOpen = false;
  isCartOpen = false;
  isCartEmpty(): boolean {
    return this.cartService.getCartItems().length === 0;
  }
  openCart(): void {
    this.isCartOpen = true;
  }
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }




}
