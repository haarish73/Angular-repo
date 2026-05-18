import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
  standalone: true
})
export class Header {

  menuType: string = 'default';
  sellerName: string = '';

  constructor(private route: Router) { }

  ngOnInit() {

    this.updateMenu(this.route.url);

    this.route.events.subscribe((event: any) => {

      if (event.url) {
        this.updateMenu(event.url);
      }

    });

  }

  updateMenu(url: string) {

    const seller = localStorage.getItem('seller');

    if (seller && url.includes('seller')) {
      this.menuType = 'seller';

      const sellerStore = localStorage.getItem('seller');

      if (sellerStore) {
        const sellerData = JSON.parse(sellerStore);
        this.sellerName = sellerData?.name || sellerData?.email;
      }

    } else {
      this.menuType = 'default';
    }

  }

  logOut() {
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }

}