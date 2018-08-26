import { InMemoryDbService } from "angular-in-memory-web-api";
import { Inventory } from "../inventory/models/inventory";
import { Book } from "../inventory/models/book";

import { v4 as uuid } from "uuid";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books: Array<Inventory> = [
      new Book({
        id: uuid(),
        name: "Te river Between",
        description: "description",
        authorId: uuid(),
        publisherId: uuid(),
        categoryId: uuid(),
        comments: "comments"
      }),
      new Book({
        id: uuid(),
        name: "Te river Between",
        description: "description",
        authorId: uuid(),
        publisherId: uuid(),
        categoryId: uuid(),
        comments: "comments"
      }),
      new Book({
        id: uuid(),
        name: "Te river Between",
        description: "description",
        authorId: uuid(),
        publisherId: uuid(),
        categoryId: uuid(),
        comments: "comments"
      }),
      new Book({
        id: uuid(),
        name: "Te river Between",
        description: "description",
        authorId: uuid(),
        publisherId: uuid(),
        categoryId: uuid(),
        comments: "comments"
      }),
      new Book({
        id: uuid(),
        name: "Te river Between",
        description: "description",
        authorId: uuid(),
        publisherId: uuid(),
        categoryId: uuid(),
        comments: "comments"
      })
    ];
    return { books };
  }
}
