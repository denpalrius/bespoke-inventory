import { Component, OnInit } from "@angular/core";
import { Book } from "../../../models/book";
import { BooksService } from "../../../services/books.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.loadAppBooks();
  }

  loadAppBooks() {
    this.booksService.getAllBooks().subscribe((books: Array<Book>) => {
      console.log("books: ", books);
    });
  }
}
