export class Publisher {
  constructor(initialData: Partial<Publisher> = null) {
    if (initialData != null) {
      Object.assign(this, initialData);
    }
  }

  id: string;
  name: string;
  description: string;
}
