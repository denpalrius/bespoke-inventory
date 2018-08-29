import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatCheckboxModule,
  MatProgressBarModule
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
  faStore,
  faPlug
} from "@fortawesome/free-solid-svg-icons";
import {
  faChartBar,
  faPlusSquare,
  faListAlt,
  faUser,
  faBell,
  faTrashAlt,
  faEdit,
  faEye
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
  faStore,
  faPlug,
  faTrashAlt,
  faEdit,
  faEye
);

const materialModules = [MatTableModule, MatPaginatorModule, MatSortModule, MatCheckboxModule, MatProgressBarModule, MatSortModule];
@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FontAwesomeModule, ...materialModules],
  declarations: [],
  exports: [FormsModule, ReactiveFormsModule, FontAwesomeModule, ...materialModules]
})
export class SharedModule {}
