import { useDispatch } from 'react-redux'
import { logger } from 'redux-logger'

import {
  Action,
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
  ThunkDispatch,
} from '@reduxjs/toolkit'

import { crashReporter } from '../middleware/crash-reporter/crash-reporter'
import { rootReducer } from '../modules'

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware:
    process.env.NODE_ENV === 'production'
      ? getDefaultMiddleware().concat(crashReporter)
      : getDefaultMiddleware().concat(logger, crashReporter),
})

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('../modules', () => {
    import('../modules').then(newRootReducer => store.replaceReducer(newRootReducer.rootReducer))
  })
}

export type RootState = ReturnType<typeof store.getState>

export type AppThunk = ThunkAction<Promise<void>, RootState, void, Action<string>>

export const useReduxDispatch = (): ThunkDispatch<RootState, void, Action<string>> =>
  useDispatch<ThunkDispatch<RootState, void, Action<string>>>()
