import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersListComponent } from "./components/users-list/users-list.component";
import { AddUserComponent } from "./components/add-user/add-user.component";
import { UserDetailsComponent } from "./components/user-details/user-details.component";

const routes: Routes = [
  { path: "", component: UsersListComponent },
  { path: "create", component: AddUserComponent },
  { path: ":id", component: UserDetailsComponent },
  { path: "*", redirectTo: "", pathMatch: "full" },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
