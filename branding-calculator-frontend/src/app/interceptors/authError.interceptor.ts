import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../services/auth-service/auth.service'; 
export const authErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

  return next(req).pipe(
    catchError((error) => {

      if (error.status === 401) {
        return authService.logout().pipe(
          switchMap(() => {
            authService.currentUser.set(null);
            localStorage.removeItem('user');
            authService.router.navigate(['/']);

            return throwError(() => error);
          })
        );
      }

      return throwError(() => error);
    })
  );
};