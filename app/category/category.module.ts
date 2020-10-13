import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {CategoryTitlePipe} from './category.pipe';
import {CategoryListComponent} from './category-list.component';
import {CategoryCardComponent} from './category-card.component';
import {CategorySlideComponent} from './category-slide.component';

import {CategoryService} from './category.service';

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule],
    declarations: [CategoryListComponent, CategoryCardComponent, CategorySlideComponent, CategoryTitlePipe],
    exports: [CategoryListComponent, CategoryCardComponent, CategorySlideComponent, CategoryTitlePipe],
    providers: [CategoryService]
})
export class CategoryModule {}