import { Category } from "./category";
import { SubCategory } from "./sub-category";
import { Store } from "./store";

export class Resource {
  constructor(initialData: Partial<Resource> = null) {
    if (initialData != null) {
      Object.assign(this, initialData);
    }
  }

  id: string;
  name: string;
  category: Category;
  subcategory: SubCategory;
  store: Store;
}
