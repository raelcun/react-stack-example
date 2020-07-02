import React from 'react'

import styles from './card-list.module.scss'

export const CardList: React.FC = ({ children }) => <div className={styles.root}>{children}</div>
