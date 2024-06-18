// role.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthenticationService) {}
    
      canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        
        const token = this.authService.getToken();
        if (!token) {
          this.router.navigate(['/login']);
          return false;
        }
        const tokenPayload = this.authService.decodeToken(token);
        //verificar que los roles del usuario autenticado tengan el rol esperado en la ruta padre ubicado en app.routes
        if (!tokenPayload.roles === route.data["expectedRole"]) {
            this.router.navigate(['/']); // no existe el rol en las rutas devolver al inicio
            return false;
        }
        return true;
      }
}
