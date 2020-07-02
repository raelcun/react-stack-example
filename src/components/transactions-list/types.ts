import { TransactionWithRunningBalance } from 'src/modules/transactions'

export type TransactionListProps = {
  isLoading: boolean
  transactions: TransactionWithRunningBalance[]
}
