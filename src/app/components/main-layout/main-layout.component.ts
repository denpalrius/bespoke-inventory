import { Component, ChangeDetectorRef, OnDestroy, ViewChild } from "@angular/core";
import { MediaMatcher } from "@angular/cdk/layout";
import { MatSidenav } from "@angular/material";

@Component({
  selector: "app-main-layout",
  templateUrl: "./main-layout.component.html",
  styleUrls: ["./main-layout.component.scss"]
})
export class MainLayoutComponent implements OnDestroy {

  mobileQuery: MediaQueryList;

  @ViewChild(MatSidenav)
  sideNav: MatSidenav;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia("(max-width: 640px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);


  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  toggleSideNav() {
    this.sideNav.toggle();
  }

  navSelect() {
    if (this.mobileQuery.matches) {
      this.sideNav.toggle();
    }
  }
}
