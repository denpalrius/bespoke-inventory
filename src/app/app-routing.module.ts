import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainLayoutComponent } from "./components/main-layout/main-layout.component";
import { LoginComponent } from "./components/login/login.component";

const routes: Routes = [
  { path: "", component: MainLayoutComponent },
  { path: "login", component: LoginComponent },
  {
    path: "inventory",
    loadChildren: "./inventory/inventory.module#InvetoryModule"
  },
  { path: "users", loadChildren: "./users/users.module#UsersModule" },
  { path: "*", redirectTo: "", pathMatch: "full" },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
