export class UserProfile {
  constructor(initialData: Partial<UserProfile> = null) {
    if (initialData != null) {
      Object.assign(this, initialData);
    }
  }

  id: string;
  email: string;
  emailVerified: boolean;
  phoneNumber: String;
  displayName!: string;
  photoURL: string;
}
