import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { MatTableDataSource, MatTable, MatPaginator, MatSort } from "@angular/material";
import { SelectionModel } from "@angular/cdk/collections";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "../../models/store";
import { StoresService } from "../../services/stores.service";
import { map, catchError, tap } from "rxjs/operators";

@Component({
  selector: "app-manage-stores",
  templateUrl: "./manage-stores.component.html",
  styleUrls: ["./manage-stores.component.scss"]
})
export class ManageStoresComponent implements OnInit, OnDestroy {
  stores$: Observable<Array<Store>>;

  rowData: any;
  columnDefs: any;

  storesDataSource: MatTableDataSource<Store>;
  displayedColumns: string[];

  initialSelection = [];
  allowMultiSelect = true;
  selection: SelectionModel<Store>;

  @ViewChild(MatTable)
  table: MatTable<any>;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;

  isInventoryLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(
    private readonly storesService: StoresService,
    private route: ActivatedRoute,
    private router: Router) {

    this.stores$ = this.storesService.getAllStores();
    this.storesDataSource = new MatTableDataSource<Store>();
  }

  ngOnInit() {
    this.selection = new SelectionModel<Store>(this.allowMultiSelect, this.initialSelection);

    this.displayedColumns = ["select", "name", "description", "caretaker", "caretakerContacts", "physicalAddress", "actions"];
    this.initializeStorestable();
  }

  ngOnDestroy() { }

  navigateTo(_route: string) {
    if (_route) {
      this.router.navigate([`../${_route}`], { relativeTo: this.route });
    }
  }

  initializeStorestable() {
    this.stores$.pipe(
      tap(_stores => {
        this.storesDataSource = new MatTableDataSource<Store>(_stores);
        this.storesDataSource.paginator = this.paginator;
        this.storesDataSource.sort = this.sort;

        this.isInventoryLoading$.next(false);

        console.log("_allStores", _stores);
      }),
      catchError(error => {
        console.log("Error: ", error);
        this.isInventoryLoading$.next(false);
        return null;
      })
    ).subscribe();
  }

  applyFilter(filterValue: string) {
    this.storesDataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.storesDataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.storesDataSource.data.forEach(row => this.selection.select(row));
  }

  onRowClicked(row) {
    console.log("Row clicked: ", row);
  }
}

