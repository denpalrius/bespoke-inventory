import { Address } from "./address";

export class Store {
  constructor(initialData: Partial<Store> = null) {
    if (initialData != null) {
      Object.assign(this, initialData);
    }
  }

  id: string;
  name: string;
  description: string;
  caretaker: string;
  caretakerContacts: string;
  address: Address;
  active: boolean;
}
