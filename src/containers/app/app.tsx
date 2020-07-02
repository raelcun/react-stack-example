import React, { useEffect, useState } from 'react'
import { TabPanel } from 'src/components/tab-panel'
import {
  clearTransactionResponses,
  fetchTransactionsCreateAsyncThunk,
} from 'src/store/modules/transactions'
import { clearAltTransactions, fetchAllTransactionsAlt } from 'src/store/modules/transactions-alt'
import { useReduxDispatch } from 'src/store/setup'

import { AppBar, Box, Button, Tab, Tabs, Toolbar } from '@material-ui/core'

import { AltTransactionsTab } from '../alt-transactions-tab'
import { TransactionsTab } from '../transactions-tab'
import styles from './app.module.scss'

const RefreshButtonWithSlice: React.FC = () => {
  const dispatch = useReduxDispatch()
  const [disabled, setDisabled] = useState(false)

  return (
    <Button
      disabled={disabled}
      color="inherit"
      variant="outlined"
      onClick={async () => {
        setDisabled(true)
        dispatch(clearTransactionResponses())
        await dispatch(fetchTransactionsCreateAsyncThunk())
        setDisabled(false)
      }}
    >
      Refresh with Slice
    </Button>
  )
}

const RefreshButtonWithAlt: React.FC = () => {
  const dispatch = useReduxDispatch()

  return (
    <Button
      color="inherit"
      variant="outlined"
      onClick={() => {
        dispatch(clearAltTransactions())
        dispatch(fetchAllTransactionsAlt())
      }}
    >
      Refresh with Alt
    </Button>
  )
}

const RefreshButtonWithFailure: React.FC = () => {
  const dispatch = useReduxDispatch()

  return (
    <Button
      color="inherit"
      variant="outlined"
      onClick={async () => {
        dispatch(clearTransactionResponses())
        dispatch(clearAltTransactions())
        dispatch(fetchAllTransactionsAlt({ shouldReject: true }))
        dispatch(fetchTransactionsCreateAsyncThunk({ shouldReject: true }))
      }}
    >
      Refresh Both with Failure
    </Button>
  )
}

export const App: React.FC = () => {
  const dispatch = useReduxDispatch()
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)

  useEffect(() => {
    dispatch(fetchTransactionsCreateAsyncThunk())
    dispatch(fetchAllTransactionsAlt())
  }, [dispatch])

  return (
    <>
      <AppBar position="sticky">
        <Toolbar className={styles.toolbar}>
          <Tabs value={selectedTabIndex} onChange={(_, newIndex) => setSelectedTabIndex(newIndex)}>
            <Tab label="Transactions" />
            <Tab label="Transactions Alt" />
          </Tabs>
          <Box>
            <RefreshButtonWithSlice />
          </Box>
          <Box>
            <RefreshButtonWithAlt />
          </Box>
          <Box>
            <RefreshButtonWithFailure />
          </Box>
        </Toolbar>
      </AppBar>
      <TabPanel selectedTabIndex={selectedTabIndex} index={0}>
        <TransactionsTab />
      </TabPanel>
      <TabPanel selectedTabIndex={selectedTabIndex} index={1}>
        <AltTransactionsTab />
      </TabPanel>
    </>
  )
}
