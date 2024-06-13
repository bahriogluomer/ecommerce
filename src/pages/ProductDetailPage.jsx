import ProductDetailCarousel from "../components/ProductDetailCarousel";
import {
  faCartShopping,
  faChevronLeft,
  faChevronRight,
  faCircle,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductCard from "../components/ProductCard";
import BrandsBanner from "../components/BrandsBanner";
import ReactStars from "react-rating-star-with-type";
import { useHistory, useParams } from "react-router";
import { fetchProductById } from "../store/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import { addToCart } from "../store/actions/shoppingCartActions";

export default function ProductDetailPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { productId } = useParams();

  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [productId]);

  const product = useSelector((store) => store.product.selectedProduct);
  const fetchState = useSelector((store) => store.product.fetchState);

  const products = useSelector((store) => store.product.productList);

  const bestSellerProducts = products
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);

  const handleCart = () => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    (fetchState == "loading single product" && (
      <div className="flex items-center justify-center h-screen text-secondary">
        <FaSpinner className="animate-spin mr-2 text-4xl" />
        Loading...
      </div>
    )) ||
    (product && (
      <>
        <section className="bg-lightgray1">
          <div className=" m-auto h-16 flex items-center justify-between px-10">
            <div className="flex gap-2 items-center">
              <p className="font-bold text-sm text-darkgray">Home </p>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-secondary"
              />
              <p className="font-bold text-sm text-secondary">Shop</p>
            </div>

            <div>
              <button
                className="font-bold text-sm text-darkgray"
                onClick={() => history.goBack()}
              >
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="text-secondary"
                />
                Previous Page
              </button>
            </div>
          </div>
        </section>
        <section id="product-details" className="bg-lightgray1 py-8">
          <div className="max-w-[1440px] m-auto flex flex-wrap items-center justify-around sm:gap-4">
            {product && (
              <div className="w-[500px]">
                <ProductDetailCarousel images={product?.images} />
              </div>
            )}

            <div className="w-[510px] flex flex-col gap-3">
              <p className="text-darkgray font-semibold text-xl">
                {product?.name}
              </p>
              <div className="flex items-center gap-3">
                <p className="text-secondary font-bold text-sm">Rating :</p>
                <ReactStars value={product?.rating} edit={false} size={20} />

                <p className="text-secondary font-bold text-sm">
                  {product?.rating}
                </p>
              </div>
              <p className="text-darkgray font-bold text-2xl">
                ${product?.price}
              </p>
              <div className="flex gap-2">
                <p className="text-secondary font-bold text-sm">
                  Availability : {product?.stock}
                </p>
                <p className="text-primary font-bold text-sm">in stock </p>
              </div>
              <p className="text-[#858585] font-semibold text-sm ">
                {product?.description}
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
                <button
                  onClick={handleCart}
                  className="bg-white rounded-full w-10 h-10 border border-gray-500"
                >
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
          <div className="flex flex-wrap content-center items-center justify-around sm:justify-center sm:gap-8 py-12">
            {product.images && product.images.length > 0 && (
              <img
                className="min-w-[330px] h-[400px] object-cover"
                src={product.images[0].url}
                alt=""
              />
            )}

            <div className="w-[332px] flex flex-col gap-4">
              <h3 className="text-darkgray font-bold text-2xl">
                the quick fox jumps over
              </h3>
              <p className="text-secondary font-semibold text-sm">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <p className="text-secondary font-semibold text-sm">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <p className="text-secondary font-semibold text-sm">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
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
              {bestSellerProducts.map((item) => (
                <ProductCard
                  key={item.id}
                  img={item.images[0].url}
                  title={item.name}
                  description={item.description}
                  stock={item.stock}
                  price={item.price}
                  rating={item.rating}
                  id={item.id}
                  name={item.name}
                  category={item.category_id}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="bg-lightgray1">
          <BrandsBanner />
        </section>
      </>
    ))
  );
}
