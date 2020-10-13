import { Component } from '@angular/core';

export interface NavItem {
  href: string;
  label: string;
  active: boolean;
}

@Component({
  selector: 'db-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent { 
  appName: string = 'Dream Bean';
  navItems: NavItem[] = [
    {href: '#', label: 'Home', active: true},
    {href: '#', label: 'Products', active: false},
    {href: '#', label: 'Checkout', active: false},
    {href: '#', label: 'Sign out', active: false}
  ];
}

