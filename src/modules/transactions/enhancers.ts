import { Transaction, TransactionWithRunningBalance } from './types'

export const withRunningBalance = (trans: Transaction[]): TransactionWithRunningBalance[] => {
  const result: TransactionWithRunningBalance[] = []
  const startingBalance = 10_000
  let runningBalance = startingBalance
  for (let i = trans.length - 1; i >= 0; i -= 1) {
    runningBalance -= trans[i].amount
    result[i] = { ...trans[i], runningBalance }
  }
  return result
}
