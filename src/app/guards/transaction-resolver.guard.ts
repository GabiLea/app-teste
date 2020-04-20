import { StatementService } from '../statement/statement.service';
import { Injectable } from '@angular/core';
import { Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { statement } from '../statement/statement';

@Injectable({
  providedIn: 'root'
})
export class TransactionResolverGuard implements Resolve<statement> {

  constructor(private service: StatementService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<statement> {
    if (route.params && route.params['id']) {
      return this.service.getByID(route.params['id'])
    }
    return of({
      id: null,
      valor: null,
      tipoOperacao: null,
      descricao: null
    })
  }

}
