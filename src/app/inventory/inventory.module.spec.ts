import { InvetoryModule } from "./inventory.module";

describe("InvetoryModule", () => {
  let invetoryModule: InvetoryModule;

  beforeEach(() => {
    invetoryModule = new InvetoryModule();
  });

  it("should create an instance", () => {
    expect(invetoryModule).toBeTruthy();
  });
});
