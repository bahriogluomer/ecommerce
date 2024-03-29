/* eslint-disable react/prop-types */
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import { useState } from "react";
import { useSelector } from "react-redux";
import { FaSpinner } from "react-icons/fa";

function ProductDetailCarousel({ images }) {
  console.log("images from product carousel", images);

  const fetchState = useSelector((store) => store.product.fetchState);

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images?.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === images?.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      {fetchState === "loading single product" ? (
        <div className="flex items-center justify-center w-[500px] h-[450px] text-secondary">
          <FaSpinner className="animate-spin mr-2 text-4xl" />
          Loading...
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="bg-cover object-cover duration-500 flex justify-around items-center">
              <div className="absolute top-22 -translate-x-0 translate-y-22 left-5 text-2xl p-2 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={60} />
              </div>
              <div className="absolute top-22 -translate-x-0 translate-y-22 right-5 text-2xl p-2 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={60} />
              </div>
              {images && images.length > 0 && (
                <img
                  className="w-[332px] h-[400px] "
                  src={images[currentIndex].url}
                  alt=""
                />
              )}
            </div>

            <div className="flex flex-wrap mt-2 gap-1">
              {images?.map((image, index) => (
                <div
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all w-24 h-16 ${
                    currentIndex === index ? "opacity-100" : "opacity-30"
                  } text-2xl cursor-pointer`}
                  style={{
                    backgroundImage: `url('${image.url}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: "5",
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetailCarousel;
