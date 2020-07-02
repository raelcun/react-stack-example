import { fetchTransactions, TransactionResponse } from 'src/modules/transactions'

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TransactionState } from './types'

export const fetchTransactionsCreateAsyncThunkInner = (getTransactions: typeof fetchTransactions) =>
  createAsyncThunk(
    'fetchTransactions',
    async (params: { shouldReject: boolean } = { shouldReject: false }) => {
      if (params.shouldReject) throw new Error('exploded')

      const responses: TransactionResponse[] = []
      for (let iteration = 0; iteration < 10; iteration += 1) {
        try {
          // eslint-disable-next-line no-await-in-loop
          const result = await getTransactions()
          responses.push(result)
          if (result.moreTransactionsIndicator === false) break
        } catch (e) {
          console.error('failed to get transactions', e)
          break
        }
      }
      return responses
    },
  )
export const fetchTransactionsCreateAsyncThunk = fetchTransactionsCreateAsyncThunkInner(
  fetchTransactions,
)

const initialState: TransactionState = {
  transactionResponses: [],
  loading: false,
}

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    clearTransactionResponses: state => {
      state.transactionResponses = []
    },
    addTransactionResponses: (state, action: PayloadAction<TransactionResponse[]>) => {
      state.transactionResponses = state.transactionResponses.concat(action.payload)
    },
    startLoading: state => {
      state.loading = true
    },
    stopLoading: state => {
      state.loading = false
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchTransactionsCreateAsyncThunk.fulfilled, (state, action) => {
        state.loading = false
        state.transactionResponses = state.transactionResponses.concat(action.payload)
      })
      .addCase(fetchTransactionsCreateAsyncThunk.pending, state => {
        state.loading = true
      })
      .addCase(fetchTransactionsCreateAsyncThunk.rejected, state => {
        state.loading = false
      }),
})

export const { clearTransactionResponses } = transactionSlice.actions

export const { reducer } = transactionSlice
