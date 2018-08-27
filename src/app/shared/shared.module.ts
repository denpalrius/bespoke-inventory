import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatCheckboxModule
} from "@angular/material";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCoffee,
  faSpinner,
  faCartPlus,
  faSignOutAlt,
  faPlus,
  faBars,
  faSearch,
  faTruck,
  faAngleDown,
  faStore
} from "@fortawesome/free-solid-svg-icons";
import {
  faChartBar,
  faPlusSquare,
  faListAlt,
  faUser,
  faBell
} from "@fortawesome/free-regular-svg-icons";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

// Add an icon to the library for convenient access in other components
library.add(
  faCoffee,
  faSpinner,
  faCartPlus,
  faSignOutAlt,
  faPlus,
  faBars,
  faSearch,
  faTruck,
  faChartBar,
  faPlusSquare,
  faListAlt,
  faUser,
  faBell,
  faAngleDown,
  faStore
);

const materialModules = [
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatCheckboxModule
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule
  ],
  declarations: [],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule
  ]
})
export class SharedModule {}
