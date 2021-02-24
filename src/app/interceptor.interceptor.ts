import {Injectable, Injector} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from './services/auth.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable <HttpEvent <any>> {
    const authService = this.injector.get(AuthService);
    const clonedReq = req.clone({
      setHeaders: {Authorization: `Bearer ${authService.getTokenOnLocalStorage()}`,
        Accept: 'application/json'
      }
    });

    return next.handle(clonedReq);
  }
}
