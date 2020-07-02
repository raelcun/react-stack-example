import { TransactionResponse } from 'src/modules/transactions'

export type TransactionState = {
  loading: boolean
  transactionResponses: TransactionResponse[]
}
