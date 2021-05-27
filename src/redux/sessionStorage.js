export const loadStateFromSessionStorage = () => {
  try {
    const serializedState = sessionStorage.getItem('state')
    if (serializedState === null) return undefined
    else return JSON.parse(serializedState)
  } catch (error) {
    throw error
  }
}

export const saveStateToSessionStorage = state => {
  try {
    const serializedState = JSON.stringify(state)
    sessionStorage.setItem('state', serializedState)
  } catch (error) {
    throw error
  }
}
