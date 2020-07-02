import React from 'react'
import { useSelector } from 'react-redux'
import { TransactionsList } from 'src/components/transactions-list'
import {
  areTransactionsLoading,
  getTransactionsWithRunningBalance,
} from 'src/store/modules/transactions'

import { Container } from '@material-ui/core'

export const TransactionsTab: React.FC = () => {
  const isLoading = useSelector(areTransactionsLoading)
  const altTransactions = useSelector(getTransactionsWithRunningBalance)

  return (
    <Container>
      <TransactionsList isLoading={isLoading} transactions={altTransactions} />
    </Container>
  )
}
