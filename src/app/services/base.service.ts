import { throwError, Observable } from "rxjs";
import { HttpHeaders } from "@angular/common/http";

export class BaseService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  api = {
    iventory: "api/inventory",
    books: "api/books"
  };

  private static handleError(error: any, message: string): Observable<never> {
    console.log("error", error);
    return throwError(message);
  }

  catchError(error: any, parameter: any): Observable<never> {
    return BaseService.handleError(error, "Error");
  }

  catchErrorDetailed(error: any, message: string): Observable<never> {
    return BaseService.handleError(error, message);
  }
}
