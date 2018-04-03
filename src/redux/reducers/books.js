import { FETCH_BOOKS } from 'redux/types';

const INITIAL_STATE = {
  books: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return { ...state, books: action.books };
    default:
      return state;
  }
};
