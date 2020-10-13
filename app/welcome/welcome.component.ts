import { Component, OnInit } from '@angular/core';
import {Category, CategoryService} from '../category/category.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent {
  slideCategories: Category[]; // = [getCategory('1'), getCategory('2'), getCategory('3')];
  cardCategories: Category[]; // = getCategories();

  constructor(private categoryServics:CategoryService) {
    this.slideCategories = [
      this.categoryServics.getCategory('1'),
      this.categoryServics.getCategory('2'),
      this.categoryServics.getCategory('3')
    ];
    this.cardCategories = this.categoryServics.getCategories();
  }
  
  selectCategory(category: Category) {
    console.log('Selected category', category.title);
  }
}