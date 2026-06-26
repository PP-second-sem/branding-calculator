import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../services/auth-service/auth.service';
import { catchError, throwError } from 'rxjs';

export const authErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

  return next(req).pipe(
    catchError((error) => {

      if (error.status === 401) {

        authService.currentUser.set(null);
        localStorage.removeItem('user');

        authService.router.navigate(['/login']);

      }

      return throwError(() => error);
    })
  );
};