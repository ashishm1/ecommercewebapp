
import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';

import {ProductService} from './product.service';
import { from } from 'rxjs';

@Component({
    selector: 'db-product-search',
    templateUrl: './product-search.component.html'
})
export class ProductSearchComponent {

    ngOnInit() {
        this.seachControl = new FormControl();
        this.seachControl.valueChanges.subscribe((value: string) => {
            this.searchChanged(value);
        });
    }

    disabled: boolean = true;
    seachControl: FormControl;

    constructor(private router: Router) {}

    searchProduct(value: string) {
        this.router.navigate(['/products'], { queryParams: { search: value} });
    }

    searchChanged(value: string) {
        if (value) {
            this.disabled = false;
        } else {
            this.disabled = true;
        }
    }
}

