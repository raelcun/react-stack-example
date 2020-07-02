export type TransactionWithRunningBalance = Transaction & {
  runningBalance: number
}

export type Transaction = {
  type: string
  amount: number
  description?: string
  authorized: boolean
  authorizedDate: string
}

export type TransactionResponse = {
  transactions: Transaction[]
  moreTransactionsIndicator: boolean
}
