import { Address } from "./address";

export class Store {
  constructor(initialData: Partial<Store> = null) {
    if (initialData != null) {
      Object.assign(this, initialData);
    }
  }

  id: string;
  addressId: string;
  caretaker: string;
  caretakerDetails: string;
}

export class IStore extends Store {
  constructor(initialData: Partial<IStore> = null) {
    super();
    if (initialData != null) {
      Object.assign(this, initialData);
    }
  }

  address: Address;
}
