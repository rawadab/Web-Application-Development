import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartValue: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.currentCartQuantity.subscribe((value: number) => {
      this.cartValue = value;
    });
  }
}