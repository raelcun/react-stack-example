import React from 'react'
import { CardList } from 'src/components/card-list'
import { TransactionCard } from 'src/components/transaction-card'
import { getTransactionsWithRunningBalance } from 'src/store/modules/transactions'

import { TransactionListProps } from './types'

const getContent = (
  isLoading: boolean,
  transactions: ReturnType<typeof getTransactionsWithRunningBalance>,
) => {
  if (isLoading === true) return 'Loading'
  if (transactions.length === 0) return 'No transactions'
  return transactions.map(t => (
    <TransactionCard
      description={t.description || 'UNKNOWN'}
      authorized={t.authorized}
      authorizedDate={t.authorizedDate}
      type={t.type}
      amount={t.amount}
      runningBalance={t.runningBalance}
    />
  ))
}

export const TransactionsList: React.FC<TransactionListProps> = ({ isLoading, transactions }) => {
  const content = getContent(isLoading, transactions)
  return <CardList>{content}</CardList>
}
