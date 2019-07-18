export interface Customer {
  _id: string;
  name: string;
  gender: { type: string; enum: ['m', 'f'] };
  dob: Date;
  phone: number;
  pincode: number;
  email: string;
  address: string;
  // photoUrl: string
}
