import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BackToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="fixed bottom-16 left-1/2 transfrom -translate-x-1/2 z-10 m-8 py-2 px-4 bg-primary text-white border rounded-full"
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon={faAngleUp} /> Back to top
    </button>
  );
};

export default BackToTopButton;
