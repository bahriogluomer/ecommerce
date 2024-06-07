import { useSelector } from "react-redux";
import LoginPage from "../pages/LoginPage";
import CreateOrderPage from "../pages/CreateOrderPage";

export default function ProtectedCreateOrderPage() {
  const isAuthenticated = useSelector((store) => store.user.userData);

  return isAuthenticated ? <CreateOrderPage /> : <LoginPage />;
}
