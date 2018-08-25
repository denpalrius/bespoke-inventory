import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { UsersModule } from "./users/users.module";
import { SideNavComponent } from "./components/side-nav/side-nav.component";
import { SearchComponent } from "./components/search/search.component";
import { TopNavComponent } from "./components/top-nav/top-nav.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MainLayoutComponent } from "./components/main-layout/main-layout.component";

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    SearchComponent,
    TopNavComponent,
    FooterComponent,
    MainLayoutComponent
  ],
  imports: [BrowserModule, AppRoutingModule, UsersModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
