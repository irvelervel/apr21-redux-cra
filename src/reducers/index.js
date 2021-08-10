import { initialState } from '../store'

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        // new state if we encounter an action of type 'INCREMENT'
        ...state,
        count: state.count + 1,
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      }
    default:
      return state
  }
}

// a reducer is also called a FINITE-STATE-MACHINE
