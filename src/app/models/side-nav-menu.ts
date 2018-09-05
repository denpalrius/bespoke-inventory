export class SideNavMenu {
  constructor(initialData: Partial<SideNavMenu> = null) {
    if (initialData != null) {
      Object.assign(this, initialData);
    }
  }
  title: string;
  link: string;
  icon: string;
}
