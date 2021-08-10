// this is going to filled with ACTION CREATORS
// an action creator is a function returning an action

export const incrementAction = (howMuch) => ({
  type: 'INCREMENT',
  payload: howMuch,
})

export const decrementAction = (howMuch) => ({
  type: 'DECREMENT',
  payload: howMuch,
})

// an action is just a JS object with a 'type' property
