export interface Voucher {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  soldOut?: boolean;
  slug: string;
}
