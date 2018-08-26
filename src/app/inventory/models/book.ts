import { Inventory } from "./inventory";

export class Book extends Inventory {
  constructor(initialData: Partial<Book> = null) {
    super();
    if (initialData != null) {
      Object.assign(this, initialData);
    }
  }

  typeId: string;
  authorId: string;
  publisherId: string;
}
