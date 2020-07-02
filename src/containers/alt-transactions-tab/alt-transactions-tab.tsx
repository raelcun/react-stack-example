import React from 'react'
import { useSelector } from 'react-redux'
import { TransactionsList } from 'src/components/transactions-list'
import {
  areAltTransactionsLoading,
  getAltTransactionsWithRunningBalance,
} from 'src/store/modules/transactions-alt'

import { Container } from '@material-ui/core'

export const AltTransactionsTab: React.FC = () => {
  const isLoading = useSelector(areAltTransactionsLoading)
  const altTransactions = useSelector(getAltTransactionsWithRunningBalance)

  return (
    <Container>
      <TransactionsList isLoading={isLoading} transactions={altTransactions} />
    </Container>
  )
}
