import axios from "axios";
export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const loginSuccess = data => ({
  type: LOGIN_SUCCESS,
  payload: {
    data
  }
});

export const loginFailed = data => ({
  type: LOGIN_FAILED,
  payload: {
    data
  }
});

export const login = data => {
  return dispatch => {
    const { email, password } = data;
    axios
      .post(
        "https://us-central1-react-native-project-cfd3e.cloudfunctions.net/auth",
        {
          email: email,
          password: password
        }
      )
      .then(res => {
        data = res.data;
        if (data.status === "success") {
          dispatch(loginSuccess(data));
          return data;
        } else {
          dispatch(loginFailed(data));
          return data;
        }
      })
      .catch(e => console.log(e));
  };
};
