import { Address } from "./address";

export class Supplier {
  constructor(initialData: Partial<Supplier> = null) {
    if (initialData != null) {
      Object.assign(this, initialData);
    }
  }

  id: string;
  name: string;
  description: string;
  address: Address;
  active: boolean;
}

