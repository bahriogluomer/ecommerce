import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import prod1 from "../assets/prod1.png";
import prod2 from "../assets/prod2.png";
import prod3 from "../assets/prod2.png";
import { useState } from "react";

function ProductDetailCarousel() {
  const slides = [
    {
      image: prod1,
    },
    {
      image: prod2,
    },
    {
      image: prod3,
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

  return (
    <div className="items-center justify-center">
      <div className="custom container relative">
        <div className="bg-cover object-cover duration-500 flex justify-around items-center ">
          <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl  p-2  text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={60} />
          </div>
          <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl p-2  text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={60} />
          </div>
          <img
            className="w-[500px] h-[450px] object-fill"
            src={slides[currentIndex].image}
            alt=""
          />
        </div>

        <div className="flex flex-wrap mt-2 gap-1">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`transition-all w-24 h-16 ${
                currentIndex === slideIndex ? "opacity-100" : "opacity-30"
              } text-2xl cursor-pointer`}
              style={{
                backgroundImage: `url('${slide.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: "5",
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetailCarousel;
