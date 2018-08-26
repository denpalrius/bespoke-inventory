import { Store } from "./store";
import { ISupplier } from "./supplier";
import { TransactionType } from "./consts/transaction-type";

export class Transaction {
  constructor(initialData: Partial<Transaction> = null) {
    if (initialData != null) {
      Object.assign(this, initialData);
    }
  }

  id: string;
  date: Date;
  resourceId: string;
  transactionType: TransactionType;
  transaQuantity: number;
  fromStoreId: string;
  supplierId: string;
  toStoreId: string;
  comments: string;
}

export class ITransaction extends Transaction {
  constructor(initialData: Partial<ITransaction> = null) {
    super();
    if (initialData != null) {
      Object.assign(this, initialData);
    }
  }

  fromStore: Store;
  toStore: Store;
  supplier: ISupplier;
}
