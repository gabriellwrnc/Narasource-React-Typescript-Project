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
