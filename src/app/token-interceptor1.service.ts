import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { AuthService } from './auth.service';
@Injectable()
export class TokenInterceptor1Service implements HttpInterceptor 
{
  constructor(private injector: Injector)
  {
  }
  intercept(req, next) 
  {
    let authService = this.injector.get(AuthService)
    let tokenizedReq = req.clone(
      {
        headers: req.headers.set('Authorization', 'bearer ' + authService.getToken1())
      }
    )
    return next.handle(tokenizedReq)
  
  }

}
