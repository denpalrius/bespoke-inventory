import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";
import { BooksService } from "../../../services/books.service";
import { Book } from "../../../models/book";
import { v4 as uuid } from "uuid";
import { BookType } from "../../../models/book-type";

@Component({
  selector: "app-add-inventory",
  templateUrl: "./add-inventory.component.html",
  styleUrls: ["./add-inventory.component.scss"]
})
export class AddInventoryComponent implements OnInit {
  bookTypes: Array<BookType>;
  newBookForm: FormGroup;
  newBook: Book;

  constructor(
    private readonly booksService: BooksService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly fb: FormBuilder
  ) {
    this.newBook = new Book();
    this.bookTypes = new Array<BookType>();
  }

  ngOnInit() {
    this.intializeNewBookForm();

    this.newBookForm.valueChanges.subscribe(value => {
      console.log(value);
      // this.newBook = { ...value };
    });

    this.loadBookTypes();
  }

  private intializeNewBookForm() {
    this.newBookForm = this.fb.group({
      id: null,
      name: null,
      description: null,
      typeId: null,
      authorId: null,
      publisherId: null,
      comments: null
    });
  }

  loadBookTypes() {
    this.booksService.getTypes().subscribe(types => {
      if (types) {
        this.bookTypes = [...types];
      }
    });
  }

  onSubmit() {
    this.addBook(new Book({ ...this.newBookForm.value }));
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
          this.newBook = new Book();
          this.newBookForm.reset();
        }
      });
  }
}
