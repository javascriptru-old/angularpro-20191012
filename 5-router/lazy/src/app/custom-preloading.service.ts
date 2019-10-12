import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { of, Observable } from 'rxjs';
import { delay, flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingStrategy implements PreloadingStrategy {

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    // if(route.data.nopreload)
    return of(true).pipe(
      delay(5000),
      flatMap(_ => load())
    );
  };

}
