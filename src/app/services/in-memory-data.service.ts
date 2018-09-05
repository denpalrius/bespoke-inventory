import { InMemoryDbService } from "angular-in-memory-web-api";
import { Inventory } from "../inventory/models/inventory";
import { Book } from "../inventory/models/book";

import { v4 as uuid } from "uuid";
import { Store } from "../inventory/models/store";
import { Address } from "../inventory/models/address";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const stores: Array<Store> = [
      new Store({
        id: uuid(),
        name: "EBC Store",
        description: "Store at EBC grounds", caretaker: "Philip", caretakerContacts: "0721238459", active: true,
        address: new Address({
          id: uuid(),
          physicalAddress: "Emmanuel Baptist Curch, Kin'gara Road",
          town: "Lavington",
          postCode: "0110",
          county: "Nairobi",
          country: "Kenya"
        })
      }),
      new Store({
        id: uuid(),
        name: "Redeemer Church Store",
        description: "Store at Redeemer Bible Church grounds", caretaker: "Dan Haffstutler", caretakerContacts: "0721238459", active: true,
        address: new Address({
          id: uuid(),
          physicalAddress: "Emmanuel Baptist Curch, Kin'gara Road",
          town: "Lavington",
          postCode: "0110",
          county: "Nairobi",
          country: "Kenya"
        })
      }), new Store({
        id: uuid(),
        name: "ACTS Bookshop",
        description: "The ACTS Bookshop", caretaker: "Andy Matoke", caretakerContacts: "0721238459", active: true,
        address: new Address({
          id: uuid(),
          physicalAddress: "Emmanuel Baptist Curch, Kin'gara Road",
          town: "Lavington",
          postCode: "0110",
          county: "Nairobi",
          country: "Kenya"
        })
      })
    ];
    return { stores };
  }

  // createDb() {
  //   const books: Array<Inventory> = [
  //     new Book({
  //       id: uuid(),
  //       name: "The river Between",
  //       description: "Best novel",
  //       typeId: uuid(),
  //       authorId: uuid(),
  //       publisherId: uuid(),
  //       categoryId: uuid(),
  //       comments: "comments"
  //     }),
  //     new Book({
  //       id: uuid(),
  //       name: "ESC Study Bible",
  //       description: "Excellent study Bible",
  //       typeId: uuid(),
  //       authorId: uuid(),
  //       publisherId: uuid(),
  //       categoryId: uuid(),
  //       comments: "comments"
  //     }),
  //     new Book({
  //       id: uuid(),
  //       name: "Membership",
  //       description: "A book on membership",
  //       typeId: uuid(),
  //       authorId: uuid(),
  //       publisherId: uuid(),
  //       categoryId: uuid(),
  //       comments: "comments"
  //     }),
  //     new Book({
  //       id: uuid(),
  //       name: "The river Between",
  //       description: "description",
  //       typeId: uuid(),
  //       authorId: uuid(),
  //       publisherId: uuid(),
  //       categoryId: uuid(),
  //       comments: "comments"
  //     }),
  //     new Book({
  //       id: uuid(),
  //       name: "Discipleship ",
  //       description: "great book",
  //       typeId: uuid(),
  //       authorId: uuid(),
  //       publisherId: uuid(),
  //       categoryId: uuid(),
  //       comments: "comments"
  //     })
  //   ];
  //   return { books };
  // }

}
