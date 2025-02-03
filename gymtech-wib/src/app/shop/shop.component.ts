import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  marcy = { name: 'Marcy 150lb Stack Home Gym', price: 400, qnt: 0 };
  abs = { name: 'Abs', price: 300, qnt: 0 };
  adductors = { name: 'Adductors', price: 350, qnt: 0 };
  bicep = { name: 'Bicep', price: 280, qnt: 0 };
  chest = { name: 'Chest', price: 400, qnt: 0 };
  back = { name: 'Back', price: 370, qnt: 0 };

  constructor(private cartService: CartService) { }

  ngOnInit() { }

  incrementQuantity(product: any) {
    product.qnt++;
  }

  decrementQuantity(product: any) {
    if (product.qnt > 0) {
      product.qnt--;
    }
  }

  addToCart(product: any) {
    if (product.qnt > 0) {
      this.cartService.addToCart({ name: product.name, price: product.price, quantity: product.qnt });
      product.qnt = 0; // Reset the quantity after adding to cart
    }
  }
}