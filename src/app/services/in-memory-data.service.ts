import { InMemoryDbService } from "angular-in-memory-web-api";
import { Inventory } from "../inventory/models/inventory";
import { Book } from "../inventory/models/book";

import { v4 as uuid } from "uuid";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books: Array<Inventory> = [
      new Book({
        id: uuid(),
        name: "The river Between",
        description: "Best novel",
        typeId: uuid(),
        authorId: uuid(),
        publisherId: uuid(),
        categoryId: uuid(),
        comments: "comments"
      }),
      new Book({
        id: uuid(),
        name: "ESC Study Bible",
        description: "Excellent study Bible",
        typeId: uuid(),
        authorId: uuid(),
        publisherId: uuid(),
        categoryId: uuid(),
        comments: "comments"
      }),
      new Book({
        id: uuid(),
        name: "Membership",
        description: "A book on membership",
        typeId: uuid(),
        authorId: uuid(),
        publisherId: uuid(),
        categoryId: uuid(),
        comments: "comments"
      }),
      new Book({
        id: uuid(),
        name: "The river Between",
        description: "description",
        typeId: uuid(),
        authorId: uuid(),
        publisherId: uuid(),
        categoryId: uuid(),
        comments: "comments"
      }),
      new Book({
        id: uuid(),
        name: "Discipleship ",
        description: "great book",
        typeId: uuid(),
        authorId: uuid(),
        publisherId: uuid(),
        categoryId: uuid(),
        comments: "comments"
      })
    ];
    return { books };
  }
}
