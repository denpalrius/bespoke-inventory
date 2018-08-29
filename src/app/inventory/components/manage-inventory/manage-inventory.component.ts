import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { Book } from "../../models/book";
import { BooksService } from "../../services/books.service";
import { MatTable, MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { SelectionModel } from "@angular/cdk/collections";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-manage-inventory",
  templateUrl: "./manage-inventory.component.html",
  styleUrls: ["./manage-inventory.component.scss"]
})
export class ManageInventoryComponent implements OnInit, OnDestroy {
  books$: Observable<Array<Book>>;

  rowData: any;
  columnDefs: any;

  booksDataSource: MatTableDataSource<Book>;
  displayedColumns: string[];

  initialSelection = [];
  allowMultiSelect = true;
  selection: SelectionModel<Book>;

  @ViewChild(MatTable)
  table: MatTable<any>;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;

  isInventoryLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(private readonly booksService: BooksService, private route: ActivatedRoute, private router: Router) {
    this.books$ = this.booksService.getAllBooks();
    this.booksDataSource = new MatTableDataSource<Book>();
  }

  ngOnInit() {
    this.selection = new SelectionModel<Book>(this.allowMultiSelect, this.initialSelection);

    this.displayedColumns = ["select", "id", "name", "description", "typeId", "actions"];
    this.initializeMaterialtable();
  }

  ngOnDestroy() {}

  navigateTo(_route: string) {
    if (_route) {
      this.router.navigate([`../${_route}`], { relativeTo: this.route });
    }
  }

  initializeMaterialtable() {
    this.books$.subscribe(_books => {
      this.booksDataSource = new MatTableDataSource<Book>(_books);
      this.booksDataSource.paginator = this.paginator;
      this.booksDataSource.sort = this.sort;

      console.log(this.booksDataSource.sort);

      this.isInventoryLoading$.next(false);
    });
  }

  applyFilter(filterValue: string) {
    this.booksDataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.booksDataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.booksDataSource.data.forEach(row => this.selection.select(row));
  }

  onRowClicked(row) {
    console.log("Row clicked: ", row);
  }
}
