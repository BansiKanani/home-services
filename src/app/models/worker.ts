export interface Worker {
  _id: string;
  isVerified: boolean;
  dob: Date;
  name: string;
  gender: { type: string; enum: ['m', 'f'] };
  address: string;
  // photoUrl: String;
  phone: number;
  servicesId: [string];
  aadhar: number;
  pan: string;
  workingHours: { start: number; end: number };
}
