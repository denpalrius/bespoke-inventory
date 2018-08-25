import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard/dashboard.component";
import { ManageInventoryComponent } from "./components/manage-inventory/manage-inventory.component";
import { ReceiveInventoryComponent } from "./components/receive-inventory/receive-inventory.component";
import { CheckInComponent } from "./components/manage-inventory/check-in/check-in.component";
import { CheckOutComponent } from "./components/manage-inventory/check-out/check-out.component";
import { AddInventoryComponent } from "./components/manage-inventory/add-inventory/add-inventory.component";
import { ManageStoresComponent } from "./components/manage-stores/manage-stores.component";
import { ManageSuppliersComponent } from "./components/manage-suppliers/manage-suppliers.component";

const routes: Routes = [
  { path: "", component: DashboardComponent },
  // { path: ":id", component: ManageInventoryComponent },
  { path: "receive", component: ReceiveInventoryComponent },
  { path: "check-in", component: CheckInComponent },
  { path: "check-out", component: CheckOutComponent },
  { path: "add", component: AddInventoryComponent },
  { path: "stores", component: ManageStoresComponent },
  { path: "suppliers", component: ManageSuppliersComponent },
  { path: "*", redirectTo: "", pathMatch: "full" },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvetoryRoutingModule {}
