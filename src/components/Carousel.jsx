import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

function Carousel() {
  const slides = [
    {
      url: "https://s3-alpha-sig.figma.com/img/96c8/6912/d491d421800e62998b9af7c838cc25d1?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PRuUc3UIlSQoQBzawEvKVIaDO-bdIxTuCT9souvziDah9LtJd4JxB-XMFy0xKdTXO6~XjZSFvNqXUHIAmRzzr4ldZJ-HMo1BIBJpO1scWbh1vEyhlYCepin4Bf1XAYJglBdY6VL9Oms5DCDEZbWA1Nogef2n~qgQGnon2yxRIF7Hpq0wl65VaAbfATTaI9Cb4N0ma-Wa3Raljf7OLN2YqHSniOGKi91Fqoan3Rf~ZBymGlnsQ9-wtSJRGLcqJ3heEYwoC1nT~KLWRtvNE-ITcKeIstII6amWNaGg1WsWfB3looJacBL2W0uZ~W-6zsHJmd84ibq6KW1kk7XNv5cnqw__",
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

  return (
    <div className="h-[720px] relative group flex">
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].url}) `,
        }}
        className="h-auto w-full bg-cover bg-no-repeat bg-center duration-500 relative"
      >
        <div className="flex flex-col gap-12  p-52 sm:gap-9 ml-20 l:ml-10 md:scale-90 md:ml-0 sm:items-center sm:scale-75">
          <h5 className="font-bold text-base text-white text-nowrap">
            SUMMER 2020
          </h5>
          <h1 className="font-bold text-5xl sm:text-4xl sm:text-center text-white">
            NEW COLLECTION
          </h1>
          <p className="md:text-start text-xl text-white w-96 sm:w-72 sm:text-center">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="w-fit font-bold rounded-md text-2xl text-nowrap sm:scale-75 text-white bg-green-500 py-3.5 px-10">
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
      <div className="flex absolute bottom-4 right-0 left-0 justify-center py-2 gap-1 sm:scale-75">
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
