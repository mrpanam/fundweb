export enum ProductType {
  Bonds = 'bonds',
  Equity = 'equity',
  MutualFunds = 'mutual funds'
}

export interface Product {
  id: number;
  name: string;
  qty: number;
  boughtPrice: number;
  currentPrice: number;
  eligible: boolean;
  date: string;
  type: ProductType;
  pnl: number;
}