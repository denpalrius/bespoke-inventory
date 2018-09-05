import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InvetoryRoutingModule } from "./inventory-routing.module";
import { SharedModule } from "../shared/shared.module";

import { DashboardComponent } from "./components/dashboard/dashboard/dashboard.component";
import { ReceiveInventoryComponent } from "./components/receive-inventory/receive-inventory.component";
import { ManageInventoryComponent } from "./components/manage-inventory/manage-inventory.component";
import { CheckInComponent } from "./components/manage-inventory/check-in/check-in.component";
import { CheckOutComponent } from "./components/manage-inventory/check-out/check-out.component";
import { AddInventoryComponent } from "./components/manage-inventory/add-inventory/add-inventory.component";
import { ManageSuppliersComponent } from "./components/manage-suppliers/manage-suppliers.component";
import { ManageStoresComponent } from "./components/manage-stores/manage-stores.component";
import { InventoryService } from "./services/inventory.service";
import { BooksService } from "./services/books.service";
import { StoresService } from "./services/stores.service";
import { SuppliersService } from "./services/suppliers.service";

@NgModule({
  imports: [
    CommonModule,
    InvetoryRoutingModule,
    SharedModule
  ],
  declarations: [
    DashboardComponent,
    ReceiveInventoryComponent,
    ManageInventoryComponent,
    CheckInComponent,
    CheckOutComponent,
    ManageSuppliersComponent,
    ManageStoresComponent,
    AddInventoryComponent
  ],
  providers: [
    InventoryService,
    BooksService,
    StoresService,
    SuppliersService
  ]
})
export class InvetoryModule { }
