import { Store } from "./store";
import { TransactionType } from "./consts/transaction-type";
import { Supplier } from "./supplier";

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
  transactionQuantity: number;
  fromStore: Store;
  toStore: Store;
  supplier: Supplier;
  comments: string;
}
