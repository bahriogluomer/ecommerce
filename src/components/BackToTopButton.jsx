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
      className="fixed bottom-0 right-0 m-8 py-2 px-4 bg-primary text-white border rounded-full z-10"
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon={faAngleUp} />
    </button>
  );
};

export default BackToTopButton;
