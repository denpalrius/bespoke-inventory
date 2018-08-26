export class BookType {
  constructor(initialData: Partial<BookType> = null) {
    if (initialData != null) {
      Object.assign(this, initialData);
    }
  }

  id: string;
  name: string;
  description: string;
}
