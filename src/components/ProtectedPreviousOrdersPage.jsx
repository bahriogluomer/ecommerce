import { useSelector } from "react-redux";
import LoginPage from "../pages/LoginPage";
import PreviousOrdersPage from "../pages/PreviousOrdersPage";

export default function ProtectedCreateOrderPage() {
  const isAuthenticated = useSelector((store) => store.user.userData);

  return isAuthenticated ? <PreviousOrdersPage /> : <LoginPage />;
}
