import { Category } from "./category";

export class SubCategory {
  constructor(initialData: Partial<SubCategory> = null) {
    if (initialData != null) {
      Object.assign(this, initialData);
    }
  }

  id: string;
  name: string;
  parentCategoryId: string;
}

export class ISubCategory extends SubCategory {
  constructor(initialData: Partial<ISubCategory> = null) {
    super();
    if (initialData != null) {
      Object.assign(this, initialData);
    }
  }

  parentCategory: Category;
}
