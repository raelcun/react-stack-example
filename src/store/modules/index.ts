import { combineReducers } from '@reduxjs/toolkit'

import { reducer as transactionsReducer } from './transactions'
import { reducer as transactionsAltReducer } from './transactions-alt'

export const rootReducer = combineReducers({
  transactions: transactionsReducer,
  transactionsAlt: transactionsAltReducer,
})
