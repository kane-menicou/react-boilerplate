import { Product } from './Product'
import { BankAccount } from './BankAccount'

/**
 * Null meaning not requested.
 */
export default interface State {
  products: Product[] | null,
  bankAccounts: BankAccount[] | null
}
