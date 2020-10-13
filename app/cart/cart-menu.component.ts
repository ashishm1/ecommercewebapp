
import {Component, Input} from '@angular/core';

import {Cart, CartService} from './cart.service';

@Component({
    selector: 'db-cart-menu',
    templateUrl: './cart-menu.component.html'
})
export class CartMenuComponent {

    public cart: Cart;

    constructor(public cartService: CartService) {
        this.cart = this.cartService.cart;
    }
}

