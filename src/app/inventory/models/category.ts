export class Category {
  constructor(initialData: Partial<Category> = null) {
    if (initialData != null) {
      Object.assign(this, initialData);
    }
  }

  id: string;
  name: string;
  description: string;
}
