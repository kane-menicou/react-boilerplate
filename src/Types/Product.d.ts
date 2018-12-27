declare enum ProductType {
  saving = 1,
  loan = 2
}

export interface Product {
  id: string
  title: string
  currentBalance: number,
  type: ProductType,
  availableBalance?: number
}
