import { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import shophero1 from "../assets/shophero1.png";
import { useHistory } from "react-router";

function Carousel() {
  const slides = [
    {
      url: shophero1,
    },
    {
      url: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const history = useHistory();

  return (
    <div className="h-[960px] w-full relative flex">
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].url}) `,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          objectFit: "cover",
          minWidth: "100%",
          height: "100%",
          transition: "background-image 0.5s ease-in-out",
        }}
        className="duration-500 relative"
      >
        <div className="flex flex-col gap-12 p-52 mt-20 ml-20 l:ml-10 md:scale-90 md:ml-0 sm:items-center sm:justify-center sm:gap-9 sm:scale-75">
          <h5 className="font-bold text-base text-white text-nowrap">
            SUMMER 2020
          </h5>
          <h1 className="font-bold text-5xl sm:text-4xl sm:text-center text-white">
            NEW COLLECTION
          </h1>
          <p className="md:text-start text-xl text-white w-96 sm:w-72 sm:text-center">
            We know how large objects will act, but things on a small scale.
          </p>
          <button
            onClick={() => history.push("/shopping")}
            className="w-fit font-bold rounded-md text-2xl text-nowrap sm:scale-75 text-white bg-green-500 py-3.5 px-10"
          >
            SHOP NOW
          </button>
        </div>
      </div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl  p-2  text-white/80 hover:text-white cursor-pointer sm:scale-75">
        <BsChevronCompactLeft onClick={prevSlide} size={80} />
      </div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl p-2  text-white/80 hover:text-white cursor-pointer sm:scale-75">
        <BsChevronCompactRight onClick={nextSlide} size={80} />
      </div>
      <div className="flex absolute bottom-4 right-0 left-0 justify-center py-2 gap-0.5 sm:scale-75">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`transition-all w-16 h-4 bg-white  ${
              currentIndex === slideIndex ? "p-2" : "bg-opacity-50"
            } cursor-pointer`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
