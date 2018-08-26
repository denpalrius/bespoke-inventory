
export class Inventory {
  constructor(initialData: Partial<Inventory> = null) {
    if (initialData != null) {
      Object.assign(this, initialData);
    }
  }

  id: string;
  name: string;
  description: string;
  categoryId: string;
  comments: string;
}

export class InventoryStatus extends Inventory {
  constructor(initialData: Partial<InventoryStatus> = null) {
    super();
    if (initialData != null) {
      Object.assign(this, initialData);
    }
  }

  checkedIn: string;
  checkedOut: string;
  inventoryQuantity: string;
  inventoryPercentage: string;
}
