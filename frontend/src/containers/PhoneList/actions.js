import axios from 'axios';
import C from '../../constants';

export const FETCH = '@Phones/FETCH';
export const fetch = () => ({
  type: FETCH,
});

export const FETCH_SUCCESS = '@Phones/FETCH_SUCCESS';
export const fetchSuccess = phones => ({
  type: FETCH_SUCCESS,
  payload: { phones },
});

export const FETCH_FAILURE = '@Phones/FETCH_FAILURE';
export const fetchFailure = error => ({
  type: FETCH_FAILURE,
  payload: { error },
});

export const RESET = '@Phones/RESET';
export const reset = () => ({
  type: RESET,
});

export const fetchPhones = () => dispatch => {
  dispatch(fetch());
  return axios
    .get(`${C.API_URL}/phones`)
    .then(res => dispatch(fetchSuccess(res.data)))
    .catch(error => dispatch(fetchFailure(error)));
};
