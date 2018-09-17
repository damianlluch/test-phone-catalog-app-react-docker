import { FETCH, FETCH_SUCCESS, FETCH_FAILURE, RESET } from './actions';

const INITIAL_STATE = {
  item: {},
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
        item: action.payload.phone,
        loading: false,
      };

    case FETCH_FAILURE:
      return {
        ...state,
        item: {},
        loading: false,
        error: action.payload.error,
      };

    case RESET:
      return {
        ...state,
        loading: true,
        error: null,
      };

    default:
      return state;
  }
};
