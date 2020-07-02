import { Transaction, TransactionResponse } from './types'

const getRandomNumber = (min: number, max: number, precision: number) => {
  const precisionMultiplier = 10 ** precision
  const newMax = max * precisionMultiplier
  const newMin = min * precisionMultiplier
  const randomInt = Math.floor(Math.random() * (newMax - newMin + 1) + newMin)
  return randomInt / precisionMultiplier
}

const createRandomTransaction = (): Transaction => ({
  type: 'Sale',
  amount: getRandomNumber(0, 1000, 2),
  authorized: Math.random() < 0.5,
  authorizedDate: '3/18/19',
  description: Math.random() < 0.25 ? undefined : 'SPOTIFY',
})

const createRandomTransactionResponse = (): TransactionResponse => ({
  transactions: Array(getRandomNumber(1, 3, 0))
    .fill(0)
    .map(() => createRandomTransaction()),
  moreTransactionsIndicator: Math.random() < 0.7,
})

export const fetchTransactions = async (): Promise<TransactionResponse> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(createRandomTransactionResponse())
    }, 100)
  })
