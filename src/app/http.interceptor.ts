import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  
   
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { AppStateService } from './services/app-state.service';

@Injectable()
export class HttpInterceptor implements HttpInterceptor {

  constructor(public appStateService :AppStateService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this.appStateService.setProductState({
      loadingStatus:'Loading'
    });

    const userToken = 'secure-user-token';
    const authReq = req.clone({ setHeaders: { Authorization: userToken } });
    return next.handle(authReq).pipe(
      finalize(()=>{
        this.appStateService.setProductState({
          loadingStatus:'Loaded'
        });
      })
    )
  }
}
