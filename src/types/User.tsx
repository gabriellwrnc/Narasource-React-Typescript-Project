//tergantung backend

export interface User {
  _createdAt: Date;
  _id: string;
  _updatedAt: Date;
  email: string;
  firstName: string;
  isEmailVerified: boolean;
  lastName: string;
  phoneNumber: string;
  role: string[];
}

export type Profile = Omit<User, "_createdAt" | "_updatedAt">;
