export class Address {
  constructor(initialData: Partial<Address> = null) {
    if (initialData != null) {
      Object.assign(this, initialData);
    }
  }

  id: string;
  physicalAddress: string;
  physicalAddress2: string;
  postCode: string;
  town: string;
  county: string;
  country: string;
  latCoord: number;
  longCoord: number;
}
