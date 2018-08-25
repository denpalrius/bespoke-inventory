import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsersRoutingModule } from "./users-routing.module";
import { AddUserComponent } from "./components/add-user/add-user.component";
import { UserDetailsComponent } from "./components/user-details/user-details.component";
import { UsersListComponent } from "./components/users-list/users-list.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [CommonModule, UsersRoutingModule, SharedModule],
  declarations: [UsersListComponent, AddUserComponent, UserDetailsComponent],
  exports: []
})
export class UsersModule {}
