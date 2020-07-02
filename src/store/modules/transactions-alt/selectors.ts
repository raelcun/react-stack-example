import {
  Transaction,
  TransactionWithRunningBalance,
  withRunningBalance,
} from 'src/modules/transactions'
import { RootState } from 'src/store/setup'

export const areAltTransactionsLoading = (state: RootState): boolean =>
  state.transactionsAlt.loading

export const getAltTransactions = (state: RootState): Transaction[] =>
  state.transactionsAlt.transactionResponses.map(e => e.transactions).flat()

export const getAltTransactionsWithRunningBalance = (
  state: RootState,
): TransactionWithRunningBalance[] => withRunningBalance(getAltTransactions(state))
