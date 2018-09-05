import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";
import { BooksService } from "../../../services/books.service";
import { Book } from "../../../models/book";
import { v4 as uuid } from "uuid";
import { BookType } from "../../../models/book-type";
import { Publisher } from "../../../models/publisher";
import { Author } from "../../../models/author";
import { BookSecondaryType } from "../../../models/book-secondary-type";
import { Subscription, Observable, combineLatest } from "rxjs";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-add-inventory",
  templateUrl: "./add-inventory.component.html",
  styleUrls: ["./add-inventory.component.scss"]
})
export class AddInventoryComponent implements OnInit {
  subscription: Subscription;

  bookTypes$: Observable<Array<BookType>>;
  bookSecondaryTypes$: Observable<Array<BookSecondaryType>>;
  authors$: Observable<Array<Author>>;
  publishers$: Observable<Array<Publisher>>;

  bookTypes: Array<BookType>;
  bookSecondaryTypes: Array<BookSecondaryType>;
  authors: Array<Author>;
  publishers: Array<Publisher>;

  newBookForm: FormGroup;

  constructor(
    private readonly booksService: BooksService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly fb: FormBuilder,
    private readonly snackBar: MatSnackBar
  ) {
    this.bookTypes = new Array<BookType>();
    this.bookSecondaryTypes = new Array<BookSecondaryType>();
    this.authors = new Array<Author>();
    this.publishers = new Array<Publisher>();

    this.bookTypes$ = this.booksService.getTypes();
    this.bookSecondaryTypes$ = this.booksService.getsecondaryTypes();
    this.authors$ = this.booksService.getAuthors();
    this.publishers$ = this.booksService.getPublishers();
  }

  ngOnInit() {
    this.intializeNewBookForm();
    this.initializeSelections();
  }

  private intializeNewBookForm() {
    this.newBookForm = this.fb.group({
      id: null,
      name: null,
      description: null,
      typeId: null,
      secondaryType: null,
      authorId: null,
      publisherId: null
    });
  }

  private initializeSelections() {
    this.subscription = combineLatest(
      this.bookTypes$,
      this.bookSecondaryTypes$,
      this.authors$,
      this.publishers$
    ).subscribe(([_bookTypes, _bookSecondaryTypes, _authros, _publishers]) => {
      this.bookTypes = _bookTypes;
      this.bookSecondaryTypes = _bookSecondaryTypes;
      this.authors = _authros;
      this.publishers = _publishers;
    });
  }

  onSubmit() {
    this.addBook(new Book({ ...this.newBookForm.value }));

    this.openSnackBar("Book saved successfully", "View");
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }

  addBook(_newBook: Book) {
    if (!_newBook) {
      return;
    }

    this.booksService
      .addBook({ ..._newBook, id: uuid() })
      .subscribe(response => {
        console.log("response", response);
        if (response) {
          this.newBookForm.reset();
        }
      });
  }
}
