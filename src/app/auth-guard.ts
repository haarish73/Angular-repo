import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {

  const router = inject(Router);

  const user = localStorage.getItem('user');

  if (user) {
    return true; // allow seller-home
  }

  // block access if not logged in
  return router.createUrlTree(['/seller-auth']);
};