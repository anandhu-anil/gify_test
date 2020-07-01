import {BOOKMARKED} from '../Type';

const initialState = [];

function Reducer(state = initialState, action) {
  switch (action.type) {
    case BOOKMARKED:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default Reducer;
