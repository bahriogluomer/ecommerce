import { toast } from "react-toastify";
import { axiosInstance } from "../../axios/axiosInstance";
import { userActions } from "../reducers/userReducer";

export const setUser = (userData) => {
  return { type: userActions.SET_USER, payload: userData };
};

export const logOut = () => {
  return { type: userActions.LOG_OUT };
};

//login thunk action
export const login = (formData, history, setSubmitting) => (dispatch) => {
  setSubmitting(true);
  axiosInstance
    .post("/login", formData)
    .then((res) => {
      console.log("status:", res.status, "response data:", res.data);
      localStorage.setItem("token", res.data.token);
      dispatch(setUser(res.data));
      toast.success("Login successfull! Redirecting you to home page.");
      history.push("/");
      setSubmitting(false);
    })
    .catch((err) => {
      console.log(err);
      toast.error(`Login failed. ${err.message}`);
      setSubmitting(false);
    });
};

//autologin thunk action
export const autoLogin = () => async (dispatch) => {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      const response = await axiosInstance.get("/verify", {
        headers: {
          Authorization: token,
        },
      });
      console.log(
        "verify status:",
        response.status,
        "verify response data:",
        response.data
      );
      dispatch(setUser(response.data));
      localStorage.setItem("token", response.data.token);
      axiosInstance.defaults.headers.common["Authorization"] =
        response.data.token;
    } catch (error) {
      console.log(error);
      //delete token from axios header
      delete axiosInstance.defaults.headers.common["Authorization"];
      //remove token from localstorage
      localStorage.removeItem("token");
    }
  }
};
