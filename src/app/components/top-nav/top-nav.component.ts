import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-top-nav",
  templateUrl: "./top-nav.component.html",
  styleUrls: ["./top-nav.component.scss"]
})
export class TopNavComponent implements OnInit {
  isNavBarCollapsed: boolean;

  constructor() {}

  ngOnInit() {}

  toggleNavBar() {
    this.isNavBarCollapsed = !this.isNavBarCollapsed;
    console.log(this.isNavBarCollapsed);
  }
}
