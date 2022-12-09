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

export interface Activity {
  id: string;
  title: string;
  category: string;
  description: string;
  date: Date;
  time_start: Date;
  time_end: Date;
  price: number;
  confirmation_status: string;
  narasumber?: any;
  created_at: Date;
  status: string;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface AdminUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
