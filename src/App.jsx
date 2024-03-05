import { useEffect } from "react";
import Main from "./layout/Main";
import { useDispatch, useSelector } from "react-redux";
import { autoLogin } from "./store/actions/userActions";
import { toast } from "react-toastify";

function App() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user.userData);
  useEffect(() => {
    if (user) {
      toast.success(`Welcome back ${user?.name} !`);
    }
  }, []);

  useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  return (
    <>
      <Main />
    </>
  );
}

export default App;
