import Footer from "./Footer";
import Header from "./Header";
import PageBody from "./PageBody";

const Main = () => {
  return (
    <div
      className="flex flex-col space-between justify-center content-center
    "
    >
      <Header />
      <PageBody />
      <Footer />
    </div>
  );
};

export default Main;
