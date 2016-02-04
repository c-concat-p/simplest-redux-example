import { FETCH_DEPT } from '../constants'

let initialState = {
    departments: []
};

function fetchDept(state, action) {
    state = Object.assign({}, state);

    state.departments = action.data.products;

    return state;
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DEPT:
      return fetchDept(state, action);
    default:
      return state
  }
}
