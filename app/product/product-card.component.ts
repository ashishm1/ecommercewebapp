import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import { ProductGridComponent } from './product-grid.component';
import {CartService} from '../cart/cart.service';
import {Product, ProductService} from './product.service';

@Component({
    selector: 'db-product-card',
    templateUrl: './product-card.component.html'
})
export class ProductCardComponent {
    @Input() products: Product[];
    @Output() addToCart: EventEmitter<Product> = new EventEmitter<Product>();

    setClasses(product: Product) {
        return {
            'card-danger': product.isSpecial,
            'card-inverse': product.isSpecial
        };
    }
    public cartService2 : CartService;
    buy(product: Product) {
        console.log('We bought', product.title);
        this.addToCart.emit(product);
    }
}
