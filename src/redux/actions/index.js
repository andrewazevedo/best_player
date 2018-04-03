import api from 'services/api';
import { FETCH_BOOKS } from 'redux/types';

export const fetchBooks = () => {
  return async (dispatch) => {
    const response = await api.get('/5ac3a33f3000005600f46fe8');
    
    dispatch({
      type: FETCH_BOOKS,
      books: response.data.data,
    });
  };
};
