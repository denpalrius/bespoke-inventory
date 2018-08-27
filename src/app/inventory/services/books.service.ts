import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { v4 as uuid } from "uuid";
import * as moment from "moment";
import { Book } from "../models/book";
import { BaseService } from "../../services/base.service";
import { Category } from "../models/category";
import { BookType } from "../models/book-type";
import { Author } from "../models/author";
import { Publisher } from "../models/publisher";
import { BookSecondaryType } from "../models/book-secondary-type";

@Injectable()
export class BooksService extends BaseService {
  constructor(private readonly http: HttpClient) {
    super();
  }

  getAllBooks(): Observable<Array<Book>> {
    return this.http.get<any>(`${this.api.books}`, this.httpOptions).pipe(
      map(_allbooks => new Array<Book>(..._allbooks)),
      catchError(error => {
        return this.catchErrorDetailed(error, "Failed to load");
      })
    );
  }

  getBook(id: string): Observable<Book> {
    return this.http.get<any>(`${this.api.books}/${id}`, this.httpOptions).pipe(
      map(bookResponse => new Book(bookResponse)),
      tap((book: Book) => console.log(`fetched book: ${book}`)),
      catchError(error => {
        return this.catchErrorDetailed(error, "Failed to load book");
      })
    );
  }

  addBook(newBook: Book): Observable<Book> {
    return this.http
      .post<any>(`${this.api.books}`, newBook, this.httpOptions)
      .pipe(
        map(bookResponse => new Book(bookResponse)),
        tap((book: Book) => console.log(`added book w/ id=${book.id}`)),
        catchError(error => {
          return this.catchErrorDetailed(error, "Failed to create new book");
        })
      );
  }

  updateBook(book: Book): Observable<Book> {
    return this.http
      .post<any>(`${this.api.books}`, book, this.httpOptions)
      .pipe(
        catchError(error => {
          return this.catchErrorDetailed(error, "Failed to update book");
        })
      );
  }

  deleteBook(id: string): Observable<Book> {
    return this.http
      .delete<any>(`${this.api.books}/${id}`, this.httpOptions)
      .pipe(
        map(bookResponse => new Book(bookResponse)),
        tap((book: Book) => console.log(`removed book w/ id=${book.id}`)),
        catchError(error => {
          return this.catchErrorDetailed(error, "Failed to delete book");
        })
      );
  }

  getTypes(): Observable<Array<BookType>> {
    const categories: Array<BookType> = [
      new BookType({
        id: uuid(),
        name: "Book",
        description: "New York best seller"
      }),
      new BookType({
        id: uuid(),
        name: "camera",
        description: "New York best seller"
      }),
      new BookType({
        id: uuid(),
        name: "CD",
        description: "New York best seller"
      })
    ];
    return of(categories);
  }

  getsecondaryTypes(): Observable<Array<BookSecondaryType>> {
    const secondaryTypes: Array<BookSecondaryType> = [
      new BookSecondaryType({
        id: uuid(),
        name: "9marks",
        description: "New York best seller"
      }),
      new BookSecondaryType({
        id: uuid(),
        name: "Music",
        description: "New York best seller"
      }),
      new BookSecondaryType({
        id: uuid(),
        name: "Video",
        description: "New York best seller"
      })
    ];
    return of(secondaryTypes);
  }

  getAuthors(): Observable<Array<Author>> {
    const authors: Array<Author> = [
      new Author({
        id: uuid(),
        name: "Mark Dever",
        description: "New York best seller"
      }),
      new Author({
        id: uuid(),
        name: "Ken Mbugua",
        description: "New York best seller"
      }),
      new Author({
        id: uuid(),
        name: "John Piper",
        description: "New York best seller"
      }),
      new Author({
        id: uuid(),
        name: "Mark Segal",
        description: "New York best seller"
      })
    ];
    return of(authors);
  }

  getPublishers(): Observable<Array<Publisher>> {
    const publishers: Array<Publisher> = [
      new Publisher({
        id: uuid(),
        name: "Cross way",
        description: "New York best seller"
      }),
      new Publisher({
        id: uuid(),
        name: "ACTS Kenya",
        description: "New York best seller"
      }),
      new Publisher({
        id: uuid(),
        name: "B&H",
        description: "New York best seller"
      })
    ];
    return of(publishers);
  }
}
