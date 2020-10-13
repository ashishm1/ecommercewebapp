import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';

import {Category} from './category.service';

@Component({
    selector: 'db-category-card',
    templateUrl: './category-card.component.html',
	styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent {
    @Input() category: Category;
    
    constructor(private router: Router) {}

    filterProducts(category: Category) {
        this.router.navigate(['/products'], { queryParams: { category: category.id} });
    }
}
