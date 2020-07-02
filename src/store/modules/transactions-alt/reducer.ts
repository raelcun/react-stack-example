import { createReducer } from '@reduxjs/toolkit'

import {
  clearAltTransactions,
  fetchTransactionsFulfilled,
  fetchTransactionsPending,
  fetchTransactionsRejected,
} from './actions'
import { TransactionState } from './types'

const initialState: TransactionState = {
  transactionResponses: [],
  loading: false,
}

export const reducer = createReducer(initialState, builder =>
  builder
    .addCase(clearAltTransactions, state => {
      state.transactionResponses = []
    })
    .addCase(fetchTransactionsFulfilled, (state, action) => {
      state.loading = false
      state.transactionResponses = state.transactionResponses.concat(action.payload)
    })
    .addCase(fetchTransactionsPending, state => {
      state.loading = true
    })
    .addCase(fetchTransactionsRejected, state => {
      state.loading = false
    }),
)
