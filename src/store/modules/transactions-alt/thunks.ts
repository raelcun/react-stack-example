import { fetchTransactions, TransactionResponse } from 'src/modules/transactions'
import { AppThunk } from 'src/store/setup'

import {
  fetchTransactionsFulfilled,
  fetchTransactionsPending,
  fetchTransactionsRejected,
} from './actions'

export const fetchAllTransactionsAlt = (
  params: { shouldReject: boolean } = { shouldReject: false },
): AppThunk => async dispatch => {
  dispatch(fetchTransactionsPending())

  const responses: TransactionResponse[] = []
  for (let iteration = 0; iteration < 10; iteration += 1) {
    try {
      if (params.shouldReject) throw new Error('exploded')

      // eslint-disable-next-line no-await-in-loop
      const result = await fetchTransactions()
      responses.push(result)
      if (result.moreTransactionsIndicator === false) break
    } catch (e) {
      console.error('failed to get transactions', e)
      dispatch(fetchTransactionsRejected(e))
      return
    }
  }

  dispatch(fetchTransactionsFulfilled(responses))
}
