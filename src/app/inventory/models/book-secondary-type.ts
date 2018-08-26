import { BookType } from "./book-type";

export class BookSecondaryType extends BookType {
  constructor(initialData: Partial<BookSecondaryType> = null) {
    super();
    if (initialData != null) {
      Object.assign(this, initialData);
    }
  }
}
