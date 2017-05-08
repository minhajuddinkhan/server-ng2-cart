import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'
import { AuthService } from './login/login.service'
import  { Observable} from 'rxjs/Observable';


@Injectable()
export class CanActivateRoute implements CanActivate {

  constructor(private authService: AuthService, private router: Router ) {}
  
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
  
        console.log('this.authService.isLoggedIn()',this.authService.isLoggedIn());
     return (this.authService.isLoggedIn())
        
     
 
 }
}