import React, { createContext, useContext, useMemo, useReducer } from 'react'
import { initialState, MediaReducer } from './MediaReducer'

const AppContext = createContext()

export function AppWrapper({ children }) {
  const [state, dispatch] = useReducer(MediaReducer, initialState)

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch])

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}

export function useAppContext() {
  return useContext(AppContext)
}
