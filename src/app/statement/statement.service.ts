import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { statement } from './statement';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StatementService {

  private readonly URL = `${environment.API}transactions`

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<statement[]>(this.URL);
  }

  getByID(id) {
    return this.http.get<statement>(`${this.URL}/${id}`).pipe(take(1));
  }

  save(transaction) {
    if (transaction.id) {
      return this.http.put(`${this.URL}/${transaction.id}`, transaction).pipe(take(1));
    } else {
      return this.http.post(this.URL, transaction).pipe(take(1));
    }
  }

  delete(id){
    return this.http.delete(`${this.URL}/${id}`, id).pipe(take(1));
  }
}
