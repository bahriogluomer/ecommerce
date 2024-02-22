import ProductDetailCarousel from "../components/ProductDetailCarousel";
import {
  faCartShopping,
  faChevronRight,
  faCircle,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import dtmain from "../assets/dtmain.png";
import { productData2 } from "../data";
import ProductCard from "../components/ProductCard";
import BrandsBanner from "../components/BrandsBanner";

export default function ProductDetailPage() {
  return (
    <>
      <section className="bg-lightgray1">
        <div className=" m-auto max-w-[1440px] h-24 flex gap-4">
          <p className="font-bold text-sm text-darkgray">Home </p>
          <FontAwesomeIcon icon={faChevronRight} className="text-secondary" />
          <p className="font-bold text-sm text-secondary">Shop</p>
        </div>
      </section>
      <section id="product-details" className="bg-lightgray1">
        <div className="max-w-[1440px] m-auto flex flex-wrap items-center justify-around sm:gap-4">
          <div className="w-[500px]">
            <ProductDetailCarousel />
          </div>

          <div className="w-[510px] flex flex-col gap-3">
            <p className="text-darkgray font-semibold text-xl">
              Floating Phone
            </p>
            <div className="flex items-center gap-3">
              <div className="text-[#F3CD03] text-xl">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p className="text-secondary font-bold text-sm">10 Reviews</p>
            </div>
            <p className="text-darkgray font-bold text-2xl">$1,139.33</p>
            <div className="flex gap-2">
              <p className="text-secondary font-bold text-sm">
                Availability :{" "}
              </p>
              <p className="text-primary font-bold text-sm">In Stock </p>
            </div>
            <p className="text-[#858585] font-semibold text-sm ">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <hr />
            <div className="flex gap-2">
              <button>
                <FontAwesomeIcon
                  className="w-fit text-primary"
                  icon={faCircle}
                />
              </button>
              <button>
                <FontAwesomeIcon
                  className="w-fit text-green-500"
                  icon={faCircle}
                />
              </button>
              <button>
                <FontAwesomeIcon
                  className="w-fit text-orange-500"
                  icon={faCircle}
                />
              </button>
              <button>
                <FontAwesomeIcon
                  className="w-fit text-darkgray"
                  icon={faCircle}
                />
              </button>
            </div>
            <div className="flex gap-3">
              <button className="bg-primary font-semibold px-3.5 py-2.5 text-white rounded-md ">
                Select Options
              </button>
              <button className="bg-white rounded-full w-10 h-10 border border-gray-500">
                <FontAwesomeIcon icon={faHeart} />
              </button>
              <button className="bg-white rounded-full w-10 h-10 border border-gray-500">
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
              <button className="bg-white rounded-full w-10 h-10 border border-gray-500">
                <FontAwesomeIcon icon={faEye} />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        id="product-description"
        className="max-w-[1440px] m-auto flex flex-col"
      >
        <div className="flex items-center justify-around font-semibold h-20 text-secondary">
          <p className="">Description</p>
          <p>Additional Information</p>
          <p>
            Reviews <span className="text-green-500">(0)</span>
          </p>
        </div>
        <hr className="max-w-[1440px] text-secondary" />
        <div className="flex flex-wrap content-center justify-around sm:justify-center sm:gap-8 py-12">
          <div className="">
            <img src={dtmain} alt="" />
          </div>
          <div className="w-[332px] flex flex-col gap-4">
            <h3 className="text-darkgray font-bold text-2xl">
              the quick fox jumps over
            </h3>
            <p className="text-secondary font-semibold text-sm">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p className="text-secondary font-semibold text-sm">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p className="text-secondary font-semibold text-sm">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
          <div className="w-[332px]">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-9">
                <div>
                  <p className="text-darkgray font-bold text-2xl">
                    the quick fox jumps over
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="flex items-center gap-2 ">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="text-secondary"
                    />
                    <p className="font-bold text-secondary text-sm ">
                      the quick fox jumps over the lazy dog
                    </p>
                  </span>

                  <span className="flex items-center gap-2 ">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="text-secondary"
                    />
                    <p className="font-bold text-secondary text-sm ">
                      the quick fox jumps over the lazy dog
                    </p>
                  </span>
                  <span className="flex items-center gap-2 ">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="text-secondary"
                    />
                    <p className="font-bold text-secondary text-sm ">
                      the quick fox jumps over the lazy dog
                    </p>
                  </span>
                  <span className="flex items-center gap-2 ">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="text-secondary"
                    />
                    <p className="font-bold text-secondary text-sm ">
                      the quick fox jumps over the lazy dog
                    </p>
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-9">
                <div>
                  <p className="text-darkgray font-bold text-2xl">
                    the quick fox jumps over
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="flex items-center gap-2 ">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="text-secondary"
                    />
                    <p className="font-bold text-secondary text-sm ">
                      the quick fox jumps over the lazy dog
                    </p>
                  </span>
                  <span className="flex items-center gap-2 ">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="text-secondary"
                    />
                    <p className="font-bold text-secondary text-sm ">
                      the quick fox jumps over the lazy dog
                    </p>
                  </span>
                  <span className="flex items-center gap-2 ">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="text-secondary"
                    />
                    <p className="font-bold text-secondary text-sm ">
                      the quick fox jumps over the lazy dog
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div />
      </section>
      <section id="bestseller-products" className="bg-lightgray1">
        <div className="max-w-[1440px] mx-auto flex flex-col">
          <div className="py-6">
            <h2 className="font-bold text-xl text-darkgray sm:text-center">
              BEST SELLER PRODUCTS
            </h2>
          </div>
          <hr className="max-w-[1440px] mb-6" />
          <div className="mx-auto max-w-[1440px] grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-16 my-10">
            {productData2.map((product, index) => (
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
        </div>
      </section>
      <section className="bg-lightgray1">
        <BrandsBanner />
      </section>
    </>
  );
}
