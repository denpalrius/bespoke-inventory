import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { v4 as uuid } from "uuid";
import * as moment from "moment";
import { Book } from "../models/book";
import { BaseService } from "../../services/base.service";

@Injectable()
export class InventoryService extends BaseService {
  constructor(private readonly http: HttpClient) {
    super();
  }

  getItems(): Observable<any> {
    return this.http.get<any>(this.api.iventory).pipe(
      tap(data => this.log("fetched data")),
      catchError(this.handleError("getHeroes", []))
    );
  }

  getItem(id: string) {
    return this.http.get<any>(this.api.books);
  }

  addBook(hero: Book): Observable<Book> {
    return this.http.post<Book>(this.api.books, hero, this.httpOptions).pipe(
      tap((book: Book) => this.log(`added book w/ id=${book.id}`)),
      catchError(this.handleError<Book>("addBook"))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log("inventory service: ", message);
    // this.messageService.add(`HeroService: ${message}`);
  }
}
