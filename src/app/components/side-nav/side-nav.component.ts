import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"]
})
export class SideNavComponent implements OnInit {
  selectedMenu = "dashboard";

  constructor() {}

  ngOnInit() {
    console.log(this.selectedMenu);
  }

  onMenuSelect(menu: string) {
    if (menu) {
      this.selectedMenu = menu;
    }
  }
}
