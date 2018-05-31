import { FETCHING_DATA, FETCH_SUCCESS } from "../actions/tweets";

const initialState = {
  isFetching: false,
  tweets: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return { ...state, isFetching: true };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        tweets: action.payload.data.tweet
      };
    default:
      return state;
  }
};
