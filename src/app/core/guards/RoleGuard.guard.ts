// role.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const token = this.authService.getToken();
    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }
    const tokenPayload = this.authService.decodeToken(token);
    //verificar que los roles del usuario autenticado tengan el rol esperado en la ruta padre ubicado en app.routes
    if (!tokenPayload.role === route.data['expectedRole']) {
      this.router.navigate(['/']); // no existe el rol en las rutas devolver al inicio
      return false;
    }
    return true;
  }
}