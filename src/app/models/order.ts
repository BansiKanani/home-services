export interface Order {
  _id: string;
  workerId: string;
  customerId: string;
  serviceId: string;
  date: Date;
  description: string;
  address: string;
  pincode: number;
  phone: number;
  status: { type: string; enum: ['ordered', 'completed'] };
}
