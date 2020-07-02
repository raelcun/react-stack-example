import React from 'react'

import { Card } from '../core/card'
import styles from './transaction-card.module.css'
import { TransactionCardProps } from './types'

export const TransactionCard: React.FC<TransactionCardProps> = ({
  description,
  type,
  authorized,
  authorizedDate,
  amount,
  runningBalance,
}) => (
  <Card>
    <div className={styles.container}>
      <div>
        <div data-testid="description" className={styles.description}>
          {description}
        </div>
        <div className={styles.type}>{type}</div>
      </div>
      <div>
        <div className={styles.authorized}>{authorized ? 'Authorized' : 'Not Authorized'}</div>
        <div className={styles.amount}>Amount: {`$${amount.toFixed(2)}`}</div>
      </div>
      <div>
        <div className={styles.authorizedDate}>{authorizedDate}</div>
        <div className={styles.runningBalance}>Running: {`$${runningBalance.toFixed(2)}`}</div>
      </div>
    </div>
  </Card>
)
