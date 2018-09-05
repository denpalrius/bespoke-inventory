import { Category } from "./category";

export class SubCategory {
  constructor(initialData: Partial<SubCategory> = null) {
    if (initialData != null) {
      Object.assign(this, initialData);
    }
  }

  id: string;
  name: string;
  parentCategory: Category;
}
