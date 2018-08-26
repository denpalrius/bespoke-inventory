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
  categoryId: string;
  subcategoryId: string;
  storeId: string;
}

export class IResource extends Resource {
  constructor(initialData: Partial<IResource> = null) {
    super();
    if (initialData != null) {
      Object.assign(this, initialData);
    }
  }

  category: Category;
  subcategory: SubCategory;
  store: Store;
}
