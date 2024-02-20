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
    <div className="h-[716px] relative group">
      <div
        style={{ background: `${slides[currentIndex].bgcolor}` }}
        className="w-full h-full bg-cover object-cover duration-500 flex justify-center gap-12 items-center sm:flex-wrap sm:h-[600px]"
      >
        <div className="flex flex-col gap-12 ml-12 sm:text-center sm:text-sm">
          <h5 className="font-bold text-base text-[#FFFFFF]">SUMMER 2020</h5>
          <h2 className="font-bold text-6xl text-[#FFFFFF]">
            Vita Classic
            <br /> Product
          </h2>
          <h4 className="font-normal text-xl text-[#FFFFFF]">
            We know how large objects will act, We know
            <br /> how are objects will act, We know
          </h4>
          <div className="flex gap-9 sm:flex-col sm:items-center">
            <h3 className="font-bold text-2xl text-[#FFFFFF]">$16.48</h3>
            <button className="w-fit font-bold text-sm text-[#FFFFFF] rounded-md bg-[#2DC071] py-3.5 px-10">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="h-full flex items-end mr-20 sm:items-start sm:justify-center sm:h-[681px]">
          <img className="" src={slides[currentIndex].image} alt="" />
        </div>
      </div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl  p-2  text-white/80 hover:text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={80} />
      </div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl p-2  text-white/80 hover:text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={80} />
      </div>
      <div className="flex absolute bottom-4 right-0 left-0 justify-center py-2 gap-1">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`transition-all w-16 h-4 bg-white  ${
              currentIndex === slideIndex ? "p-2" : "bg-opacity-50"
            }  cursor-pointer`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Carousel2;
