import {
  Transaction,
  TransactionWithRunningBalance,
  withRunningBalance,
} from 'src/modules/transactions'
import { RootState } from 'src/store/setup'

export const areTransactionsLoading = (state: RootState): boolean => state.transactions.loading

export const getTransactions = (state: RootState): Transaction[] =>
  state.transactions.transactionResponses.map(e => e.transactions).flat()

export const getTransactionsWithRunningBalance = (
  state: RootState,
): TransactionWithRunningBalance[] => withRunningBalance(getTransactions(state))
