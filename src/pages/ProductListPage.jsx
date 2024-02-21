import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CategoryCard from "../components/CategoryCard";
import { categoryData, productData } from "../data";
import {
  faChevronDown,
  faChevronRight,
  faListCheck,
  faTableCellsLarge,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import BrandsBanner from "../components/BrandsBanner";

export default function ProductListPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <section className="bg-lightgray1">
        <div className="m-auto max-w-[1440px] flex flex-col py-8">
          <div className="justify-between flex">
            <h3 className="font-bold text-2xl text-dark-text-color">Shop</h3>
            <div className="flex items-center gap-2">
              <p className="font-bold text-sm text-dark-text-color ">Home</p>
              <FontAwesomeIcon
                icon={faChevronRight}
                size="sm"
                className="text-disabledtext"
              />
              <p className="font-bold text-sm text-disabledtext">Shop</p>
            </div>
          </div>
        </div>
      </section>
      <section id="categories" className="bg-lightgray1  ">
        <div className="mx-auto max-w-[1440px] p-6 flex justify-between items-center sm:flex-col sm:items-center sm:gap-2">
          {categoryData.map((category, index) => (
            <CategoryCard
              key={index}
              backgroundImage={category.backgroundImage}
              title={category.title}
              count={category.count}
            />
          ))}
        </div>
      </section>
      <section className="m-auto max-w-[1440px] p-12">
        <div className="flex justify-between flex-wrap items-center sm:flex-col">
          <h6 className="font-bold text-base text-secondary">
            Showing all 12 results
          </h6>
          <div className="flex items-center gap-3">
            <h6 className="font-bold text-base text-secondary">Views:</h6>
            <button className="w-12 h-12 flex justify-center items-center border rounded-md">
              <FontAwesomeIcon icon={faTableCellsLarge} size="lg" />
            </button>
            <button className="w-12 h-12 flex justify-center items-center border rounded-md">
              <FontAwesomeIcon icon={faListCheck} size="lg" />
            </button>
          </div>
          <div className="flex gap-4">
            <div id="drop-down-menu" className="">
              <button
                onClick={toggleDropdown}
                className="bg-lightgray1 text-secondary border rounded-md focus:outline-none px-6 py-2.5"
              >
                Popularity <FontAwesomeIcon icon={faChevronDown} />
              </button>
              {isOpen && (
                <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Item 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Item 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Item 3
                  </a>
                </div>
              )}
            </div>
            <button className="bg-primary font-semibold px-6 py-2.5 text-white rounded-md ">
              Filter
            </button>
          </div>
        </div>
      </section>
      <section id="products">
        <div className="mx-auto max-w-[1440px] flex flex-wrap items-start content-start gap-9 px-36 py-12">
          {productData.map((product, index) => (
            <ProductCard
              key={index}
              img={product.img}
              title={product.title}
              category={product.category}
              oldPrice={product.oldPrice}
              newPrice={product.newPrice}
            />
          ))}
        </div>
        <div
          id="pagination-placeholder"
          className="text-primary font-semibold flex items-center justify-center m-8"
        >
          <button className="border rounded-l-md px-4 py-6">First</button>
          <span className="text-center px-4 py-6 border">1</span>
          <span className="text-center px-4 py-6 border">2</span>
          <span className="text-center px-4 py-6 border">3</span>
          <button className="border rounded-r-md px-4 py-6">Next</button>
        </div>
      </section>
      <section
        id="brands-banner"
        className="bg-lightgray1 flex items-center justify-center"
      >
        <BrandsBanner />
      </section>
    </div>
  );
}
