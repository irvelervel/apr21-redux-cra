import { initialState } from '../store'

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        // new state if we encounter an action of type 'INCREMENT'
        ...state,
        count: state.count + action.payload,
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - action.payload,
      }
    default:
      return state
  }
}

// a reducer is also called a FINITE-STATE-MACHINE
