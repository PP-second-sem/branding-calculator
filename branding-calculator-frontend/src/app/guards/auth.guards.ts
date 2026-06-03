import { inject } from '@angular/core';
import { CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth-service/auth.service';

export const authGuard: CanActivateFn = (
  route,
  state: RouterStateSnapshot
) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  }

  router.navigate(
    ['/login'],
    {
      queryParams: {
        returnUrl: state.url
      }
    }
  );

  return false;
};