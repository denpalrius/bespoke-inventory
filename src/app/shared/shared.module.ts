import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatCheckboxModule,
  MatProgressBarModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSnackBarModule,
  MatButtonModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatTooltipModule
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
  faPlug,
  faEllipsisH,
  faEllipsisV
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
  faEye,
  faEllipsisH,
  faEllipsisV
);

const materialModules = [
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatCheckboxModule,
  MatProgressBarModule,
  MatSortModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatSnackBarModule,
  MatButtonModule,
  MatSidenavModule,
  MatExpansionModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatTooltipModule
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ...materialModules
  ],
  declarations: [],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ...materialModules
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } }
  ]
})
export class SharedModule { }
