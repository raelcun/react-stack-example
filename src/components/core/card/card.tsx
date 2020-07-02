import classnames from 'classnames'
import React from 'react'

import styles from './card.module.css'
import { CardProps } from './types'

export const Card: React.FC<CardProps> = ({ children, classes }) => (
  <div className={classnames(classes, styles.card)} data-testid="card">
    {children}
  </div>
)
