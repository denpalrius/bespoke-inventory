import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSortModule } from "@angular/material";
import { Subscription, Observable } from "rxjs";
import { Book } from "../../models/book";
import { BooksService } from "../../services/books.service";
import {
  MatTable,
  MatTableDataSource,
  MatPaginator,
  MatSort
} from "@angular/material";

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
  booksDataSource: MatTableDataSource<Book>;

  @ViewChild(MatTable)
  table: MatTable<any>;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;

  constructor(private readonly booksService: BooksService) {
    this.books$ = this.booksService.getAllBooks();
    this.books = new Array<Book>();
    this.booksDataSource = new MatTableDataSource<Book>();
  }

  ngOnInit() {
    this.displayedColumns = ["id", "name", "description", "typeId"];
    this.initializeMaterialtable();
  }

  initializeMaterialtable() {
    this.books$.subscribe(_books => {
      console.log(_books);
      this.booksDataSource = new MatTableDataSource<Book>(_books);
      this.booksDataSource.paginator = this.paginator;
      this.booksDataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.booksDataSource.filter = filterValue.trim().toLowerCase();
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
