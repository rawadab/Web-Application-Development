import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.css']
})
export class ShopCardComponent implements OnInit {

  cartItems: any[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.currentCartItems.subscribe(items => {
      this.cartItems = items;
      this.updateTable();
    });
  }

  updateTable() {
    const tableBody = document.getElementById('cartTableBody');
    if (tableBody) {
      tableBody.innerHTML = ''; // Clear existing rows

      this.cartItems.forEach(item => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = item.name;
        row.appendChild(nameCell);

        const priceCell = document.createElement('td');
        priceCell.textContent = `$${item.price}`;
        row.appendChild(priceCell);

        const quantityCell = document.createElement('td');
        quantityCell.textContent = item.quantity;
        row.appendChild(quantityCell);

        const totalCell = document.createElement('td');
        totalCell.textContent = `$${item.price * item.quantity}`;
        row.appendChild(totalCell);

        const removeCell = document.createElement('td');
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Cancel';
        removeButton.onclick = () => this.removeItem(item);
        removeCell.appendChild(removeButton);
        row.appendChild(removeCell);

        tableBody.appendChild(row);
      });
    }
  }

  removeItem(item: any) {
    this.cartService.removeFromCart(item);
  }

  buyAllItems() {
    if (this.cartItems.length > 0) {
      alert('Purchase successful!');
      this.cartService.clearCart();
    } else {
      alert('No items in cart to purchase.');
    }
  }
}