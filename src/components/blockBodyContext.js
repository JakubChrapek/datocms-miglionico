import * as React from 'react'

const BlockBodyContext = React.createContext()

function BlockBodyReducer(state, action) {
  switch (action.type) {
    case 'showMenu': {
      return { blockBody: true }
    }
    case 'hideMenu': {
      return { blockBody: false }
    }
    default: {
      throw new Error(
        `Unhandled action type: ${action.type}`
      )
    }
  }
}

function BlockBodyProvider({ children }) {
  const [state, dispatch] = React.useReducer(
    BlockBodyReducer,
    {
      blockBody: false
    }
  )
  const value = { state, dispatch }
  return (
    <BlockBodyContext.Provider value={value}>
      {children}
    </BlockBodyContext.Provider>
  )
}

function useBlockBody() {
  const context = React.useContext(BlockBodyContext)
  if (context === undefined) {
    throw new Error(
      'useBlockBody must be used within a BlockBodyProvider'
    )
  }
  return context
}

export { BlockBodyProvider, useBlockBody }
