export class Address {
  constructor(initialData: Partial<Address> = null) {
    if (initialData != null) {
      Object.assign(this, initialData);
    }
  }

  addressId: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  postCode: string;
  country: string;
  latCoord: number;
  longCoord: number;
  buildingDetails: string;
}
