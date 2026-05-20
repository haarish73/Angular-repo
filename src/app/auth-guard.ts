import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {

  const router = inject(Router);

  const seller = localStorage.getItem('seller');

  if (seller) {
    try {
      const sellerData = JSON.parse(seller);
      if (sellerData?.role === 'seller') {
        return true;
      }
    } catch {
      localStorage.removeItem('seller');
    }
  }

  return router.createUrlTree(['/seller-auth']);
};
