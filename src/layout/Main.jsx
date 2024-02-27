import Footer from "./Footer";
import Header from "./Header";
import PageBody from "./PageBody";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  return (
    <div className="font-montserrat w-full">
      <ToastContainer />
      <Header />
      <PageBody />
      <Footer />
    </div>
  );
};

export default Main;
