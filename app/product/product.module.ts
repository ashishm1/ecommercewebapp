import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {ProductListComponent} from './product-list.component';
import {ProductCardComponent} from './product-card.component';
import {ProductSearchComponent} from './product-search.component';
import {ProductGridComponent} from './product-grid.component';
import {ProductViewComponent} from './product-view.component';

import {ProductService} from './product.service';
import {CategoryModule} from '../category/category.module';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, CategoryModule],
    declarations: [ProductListComponent, ProductCardComponent, ProductSearchComponent, ProductGridComponent, ProductViewComponent],
    exports: [ProductListComponent, ProductCardComponent, ProductSearchComponent, ProductGridComponent, ProductViewComponent],
    providers: [ProductService]
})
export class ProductModule {}