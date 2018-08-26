import { Address } from "./address";

export class Supplier {
  constructor(initialData: Partial<Supplier> = null) {
    if (initialData != null) {
      Object.assign(this, initialData);
    }
  }

  id: string;
  name: string;
  addressId: string;
}

export class ISupplier extends Supplier {
  constructor(initialData: Partial<ISupplier> = null) {
      super();
      if (initialData != null) {
        Object.assign(this, initialData);
      }
    }

  address: Address;
}
