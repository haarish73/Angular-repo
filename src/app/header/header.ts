import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
  standalone: true
})
export class Header {

  menuType: string = 'default';
  sellerName: string = '';
searchText: string = '';

  constructor(private route: Router,
    private router: Router
  ) { }

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
submitSearch() {
  if (this.searchText.trim()) {
    this.router.navigate(['/search', this.searchText]);
  }
}
}