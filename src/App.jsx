import { useEffect } from "react";
import Main from "./layout/Main";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "./axios/axiosInstance";
import { setUserActionCreator } from "./store/actions/userActions";
import { toast } from "react-toastify";

function App() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user.userData);
  useEffect(() => {
    if (user) {
      toast.success(`Welcome back ${user?.name} !`);
      console.log("user", user);
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axiosInstance
        .get("/verify", {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          console.log("status:", res.status, "response data:", res.data);
          dispatch(setUserActionCreator(res.data));
          localStorage.setItem("token", res.data.token);
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem("token");
        });
    }
  }, [dispatch]);

  return (
    <>
      <Main />
    </>
  );
}

export default App;
