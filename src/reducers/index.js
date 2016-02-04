import { FETCH_DEPT } from '../constants'

let initialState = {};

function fetchDept(state, action) {
    console.log(state);

    // do other stuff

    return Object.assign({}, state);
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DEPT:
      return fetchDept(state, action);
    default:
      return state
  }
}
