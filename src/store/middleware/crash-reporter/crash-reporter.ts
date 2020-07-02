import { Middleware } from '@reduxjs/toolkit'

export const crashReporter: Middleware = () => next => action => {
  try {
    return next(action)
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Redux reducer exploded', err)
    throw err
  }
}
