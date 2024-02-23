import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import carousel2 from "../assets/carousel2.png";
import carousel2img2 from "../assets/carousel2img2.png";

function Carousel2() {
  const slides = [
    {
      bgcolor: "#23856D",
      image: carousel2,
    },
    {
      bgcolor: "#23856D",
      image: carousel2img2,
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
    <div className="bg-[#23856d] relative group">
      <div className="max-w-[1440px] mx-auto relative">
        <div
          style={{ background: `${slides[currentIndex].bgcolor}` }}
          className="w-full h-full bg-cover object-cover duration-500 flex sm:flex-col justify-around items-center "
        >
          <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-0 sm:left-5 text-2xl  p-2  text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={60} />
          </div>
          <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 md:right-5 text-2xl p-2  text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={60} />
          </div>
          <div className="flex mt-18 gap-12 justify-center items-center md:text-center sm:items-stretch flex-col">
            <h5 className="font-bold text-white text-start md:text-center">
              SUMMER 2020
            </h5>
            <h1 className="font-bold md:text-center text-6xl text-white md:text-4xl">
              Vita Classic
              <br /> Product
            </h1>
            <h4 className="text-xl text-white w-96 sm:w-72 md:text-center md:text-lg">
              We know how large objects will act, We know how are objects will
              act, We know
            </h4>
            <div className="flex items-center justify-center gap-6 md:flex-col">
              <h3 className="font-bold text-2xl text-white">$16.48</h3>
              <button className="w-fit font-bold text-sm text-white rounded-md bg-green-500 py-3.5 px-10">
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="h-full flex items-end mt-12">
            <img className="" src={slides[currentIndex].image} alt="" />
          </div>
        </div>

        <div className="hidden sm:flex absolute bottom-4 right-0 left-0 justify-center py-2 gap-1 sm:scale-75">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`transition-all w-16 h-3 bg-white  ${
                currentIndex === slideIndex ? "" : "bg-opacity-50"
              } text-2xl cursor-pointer`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel2;
