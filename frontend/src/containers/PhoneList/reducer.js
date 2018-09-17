import { FETCH, FETCH_SUCCESS, FETCH_FAILURE, RESET } from './actions';

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        items: action.payload.phones,
        loading: false,
      };

    case FETCH_FAILURE:
      return {
        ...state,
        items: [],
        loading: false,
        error: action.payload.error,
      };

    case RESET:
      return {
        ...state,
        items: [],
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};
