import { TransactionResponse } from 'src/modules/transactions'

import { createAction } from '@reduxjs/toolkit'

export const clearAltTransactions = createAction('transactions-alt/clear')
export const fetchTransactionsFulfilled = createAction<TransactionResponse[]>(
  'transactions-alt/fulfilled',
)
export const fetchTransactionsPending = createAction('transactions-alt/pending')
export const fetchTransactionsRejected = createAction<Error>('transactions-alt/rejected')
