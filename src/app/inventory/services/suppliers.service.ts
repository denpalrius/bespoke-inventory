import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { v4 as uuid } from "uuid";
import * as moment from "moment";
import { BaseService } from "../../services/base.service";
import { Supplier } from "../models/supplier";

@Injectable()
export class SuppliersService extends BaseService {
  constructor(private readonly http: HttpClient) {
    super();
  }

  getAllSuppliers(): Observable<Array<Supplier>> {
    return this.http.get<any>(`${this.api.suppliers}`, this.httpOptions)
      .pipe(
        map(_allSuppliers => new Array<Supplier>(..._allSuppliers)),
        catchError(error => {
          return this.catchErrorDetailed(error, "Failed to load suppliers");
        })
      );
  }

  getSupplier(id: string): Observable<Supplier> {
    return this.http.get<any>(`${this.api.suppliers}/${id}`, this.httpOptions)
      .pipe(
        map(supplierResponse => new Supplier(supplierResponse)),
        tap((supplier: Supplier) => console.log(`fetched supplier: ${supplier}`)),
        catchError(error => {
          return this.catchErrorDetailed(error, "Failed to load supplier");
        })
      );
  }

  addSupplier(newSupplier: Supplier): Observable<Supplier> {
    return this.http
      .post<any>(`${this.api.suppliers}`, newSupplier, this.httpOptions)
      .pipe(
        map(supplierResponse => new Supplier(supplierResponse)),
        tap((supplier: Supplier) => console.log(`added supplier w/ id=${supplier.id}`)),
        catchError(error => {
          return this.catchErrorDetailed(error, "Failed to create new supplier");
        })
      );
  }

  updateSupplier(supplier: Supplier): Observable<Supplier> {
    return this.http
      .post<any>(`${this.api.suppliers}`, supplier, this.httpOptions)
      .pipe(
        map(supplierResponse => new Supplier(supplierResponse)),
        tap((updatedSupplier: Supplier) => console.log(`removed supplier w/ id=${updatedSupplier.id}`)),
        catchError(error => {
          return this.catchErrorDetailed(error, "Failed to update supplier");
        })
      );
  }

  deleteSupplier(id: string): Observable<Supplier> {
    return this.http
      .delete<any>(`${this.api.suppliers}/${id}`, this.httpOptions)
      .pipe(
        map(supplierResponse => new Supplier(supplierResponse)),
        tap((supplier: Supplier) => console.log(`removed supplier w/ id=${supplier.id}`)),
        catchError(error => {
          return this.catchErrorDetailed(error, "Failed to delete supplier");
        })
      );
  }
}
