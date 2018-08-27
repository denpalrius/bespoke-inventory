import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTable, MatTableModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [],
  exports: [FontAwesomeModule, MatTableModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule {}
