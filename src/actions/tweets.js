import axios from "axios";

export const FETCHING_DATA = "FETCHING_DATA";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILED = "FETCH_FAILED";

export const fetchTweets = () => {
  return dispatch => {
    dispatch({ type: FETCHING_DATA });
    axios
      .get(
        "https://us-central1-react-native-project-cfd3e.cloudfunctions.net/hello"
      )
      .then(res => {
        dispatch({
          type: FETCH_SUCCESS,
          payload: {
            data: res.data
          }
        });
        return res.data;
      })
      .then(e => console.log(e));
  };
};
