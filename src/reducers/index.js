import { INCREASE } from '../constants'

// Reducer
export default function counter (state = {count: 0}, action) {
  let count = state.count

  switch (action.type) {
    case INCREASE:
      return {count: count + 1}
    default:
      return state
  }
}
