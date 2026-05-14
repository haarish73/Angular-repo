import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
  standalone: true
})
export class Header {

  menuType: string = 'default';

  constructor(private route: Router) {}

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
  } else {
    this.menuType = 'default';
  }

}


}