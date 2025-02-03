import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  currentCartItems = this.cartItems.asObservable();

  private cartQuantity = new BehaviorSubject<number>(0);
  currentCartQuantity = this.cartQuantity.asObservable();

  constructor() { }

  addToCart(item: CartItem) {
    const currentItems = this.cartItems.value;
    const existingItemIndex = currentItems.findIndex(i => i.name === item.name);

    if (existingItemIndex !== -1) {
      currentItems[existingItemIndex].quantity += item.quantity;
    } else {
      currentItems.push(item);
    }

    this.cartItems.next(currentItems);
    this.updateCartQuantity();
  }

  removeFromCart(item: CartItem) {
    let currentItems = this.cartItems.value;
    currentItems = currentItems.filter(i => i.name !== item.name);
    this.cartItems.next(currentItems);
    this.updateCartQuantity();
  }

  clearCart() {
    this.cartItems.next([]);
    this.updateCartQuantity();
  }

  private updateCartQuantity() {
    const totalQuantity = this.cartItems.value.reduce((sum, item) => sum + item.quantity, 0);
    this.cartQuantity.next(totalQuantity);
  }
}