import { Component } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { OnInit } from '@angular/core';
import { Product } from '../../core/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
newProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.newProducts = products.filter(p => p.new);
    });
  }
}
