
class BookPayment {
  creation_date: string;
  amount: number;
}

export class Payment {
  user_id: number;
  name: string;
  surname: string;
  bookings_payments: BookPayment[];
  total_amount: number;
  expanded: boolean;
}
