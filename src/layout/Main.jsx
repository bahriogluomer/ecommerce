import Footer from "./Footer";
import Header from "./Header";
import PageBody from "./PageBody";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  return (
    <div className="flex flex-col justify-between font-montserrat w-full min-h-screen">
      <Header />
      <PageBody />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Main;
