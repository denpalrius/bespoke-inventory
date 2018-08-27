import { Component, OnInit } from "@angular/core";
import { GridOptions } from "ag-grid";
import { Subscription, Observable } from "rxjs";
import { Book } from "../../models/book";
import { BooksService } from "../../services/books.service";

@Component({
  selector: "app-manage-inventory",
  templateUrl: "./manage-inventory.component.html",
  styleUrls: ["./manage-inventory.component.scss"]
})
export class ManageInventoryComponent implements OnInit {
  subscription: Subscription;

  books$: Observable<Array<Book>>;
  books: Array<Book>;

  rowData: any;
  columnDefs: any;

  displayedColumns: string[];

  constructor(private readonly booksService: BooksService) {
    this.books$ = this.booksService.getAllBooks();
    this.books = new Array<Book>();
  }

  ngOnInit() {
    this.displayedColumns = ["id", "name", "description", "typeId"];

    this.initializeGrid();
    this.initializeMaterialtable();
  }

  initializeMaterialtable() {
    // this.books$.subscribe(_books => {
    //   console.log(this.books);
    // });
  }

  initializeGrid() {
    const fieldWidth = 120;

    this.columnDefs = [
      {
        headerName: "ID",
        field: "id",
        width: fieldWidth
      },
      {
        headerName: "Name",
        field: "name",
        width: 150
      },
      {
        headerName: "Description",
        field: "description",
        width: 150
      },
      {
        headerName: "Type",
        field: "typeId",
        width: fieldWidth
      },
      {
        headerName: "Author",
        field: "authorId",
        width: fieldWidth
      },
      {
        headerName: "Publisher",
        field: "publisherId",
        width: fieldWidth
      }
    ];

    this.rowData = this.books$;
  }
}
