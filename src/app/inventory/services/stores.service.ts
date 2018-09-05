import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { v4 as uuid } from "uuid";
import * as moment from "moment";
import { BaseService } from "../../services/base.service";
import { Store } from "../models/store";

@Injectable()
export class StoresService extends BaseService {
  constructor(private readonly http: HttpClient) {
    super();
  }

  getAllStores(): Observable<Array<Store>> {
    return this.http.get<any>(`${this.api.stores}`, this.httpOptions)
      .pipe(
        map(_allStores => new Array<Store>(..._allStores)),
        catchError(error => {
          return this.catchErrorDetailed(error, "Failed to load stores");
        })
      );
  }

  getStore(id: string): Observable<Store> {
    return this.http.get<any>(`${this.api.stores}/${id}`, this.httpOptions)
      .pipe(
        map(storeResponse => new Store(storeResponse)),
        tap((store: Store) => console.log(`fetched store: ${store}`)),
        catchError(error => {
          return this.catchErrorDetailed(error, "Failed to load store");
        })
      );
  }

  addStore(newStore: Store): Observable<Store> {
    return this.http
      .post<any>(`${this.api.stores}`, newStore, this.httpOptions)
      .pipe(
        map(storeResponse => new Store(storeResponse)),
        tap((store: Store) => console.log(`added store w/ id=${store.id}`)),
        catchError(error => {
          return this.catchErrorDetailed(error, "Failed to create new store");
        })
      );
  }

  updateStore(store: Store): Observable<Store> {
    return this.http
      .post<any>(`${this.api.stores}`, store, this.httpOptions)
      .pipe(
        map(storeResponse => new Store(storeResponse)),
        tap((updatedStore: Store) => console.log(`removed store w/ id=${updatedStore.id}`)),
        catchError(error => {
          return this.catchErrorDetailed(error, "Failed to update store");
        })
      );
  }

  deleteStore(id: string): Observable<Store> {
    return this.http
      .delete<any>(`${this.api.stores}/${id}`, this.httpOptions)
      .pipe(
        map(storeResponse => new Store(storeResponse)),
        tap((store: Store) => console.log(`removed store w/ id=${store.id}`)),
        catchError(error => {
          return this.catchErrorDetailed(error, "Failed to delete store");
        })
      );
  }
}
