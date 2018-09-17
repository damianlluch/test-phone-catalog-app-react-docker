import axios from 'axios';
import C from '../../constants';

export const FETCH = '@Phone/FETCH';
export const fetch = () => ({
  type: FETCH,
});

export const FETCH_SUCCESS = '@Phone/FETCH_SUCCESS';
export const fetchSuccess = phone => ({
  type: FETCH_SUCCESS,
  payload: { phone },
});

export const FETCH_FAILURE = '@Phone/FETCH_FAILURE';
export const fetchFailure = error => ({
  type: FETCH_FAILURE,
  payload: { error },
});

export const RESET = '@Phone/RESET';
export const reset = () => ({
  type: RESET,
});

export const fetchPhone = id => dispatch => {
  dispatch(fetch());
  return axios
    .get(`${C.API_URL}/phones/${id}`)
    .then(res => dispatch(fetchSuccess(res.data)))
    .catch(error => dispatch(fetchFailure(error)));
};
