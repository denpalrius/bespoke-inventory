import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute, Router, NavigationStart } from "@angular/router";

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"]
})
export class SideNavComponent implements OnInit {
  selectedMenu: string;

  @Output()
  selectNavItem: EventEmitter<any> = new EventEmitter<any>();

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationStart) {
        const url = val.url.substr(1);

        if (url && this.selectedMenu !== url) {
          this.selectedMenu = url;
        }

        if (!url) {
          this.selectedMenu = "inventory";
        }
      }
    });
  }

  onMenuSelect(menu: string) {
    this.selectNavItem.emit();

    if (menu) {
      this.selectedMenu = menu;
      this.router.navigate([this.selectedMenu], { relativeTo: this.route });
    }
  }
}
