import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { SideNavComponent } from "./components/side-nav/side-nav.component";
import { SearchComponent } from "./components/search/search.component";
import { TopNavComponent } from "./components/top-nav/top-nav.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MainLayoutComponent } from "./components/main-layout/main-layout.component";
import { SharedModule } from "./shared/shared.module";
import { LoginComponent } from "./components/login/login.component";
import { HttpClientModule } from "@angular/common/http";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./services/in-memory-data.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    SearchComponent,
    TopNavComponent,
    FooterComponent,
    LoginComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    }),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
