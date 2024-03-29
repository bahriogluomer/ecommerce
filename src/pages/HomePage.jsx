import Carousel from "../components/Carousel";
import Carousel2 from "../components/Carousel2";
import edit1 from "../assets/edit1.png";
import edit2 from "../assets/edit2.png";
import edit3 from "../assets/edit3.png";
import edit4 from "../assets/edit4.png";
import couple from "../assets/couple.png";
import { postData } from "../data";
import ProductCard from "../components/ProductCard";
import PostCard from "../components/PostCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/actions/productActions";

export default function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const products = useSelector((store) => store.product.productList);

  const bestSellerProducts = products
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);
  return (
    <>
      <section className="w-full">
        <Carousel />
      </section>
      <section
        id="editors-pick"
        className="flex flex-wrap gap-9 flex-col justify-center items-center py-24"
      >
        <div className="flex gap-3 flex-col items-center">
          <h3 className="font-bold text-2xl text-darkgray">EDITOR’S PICKS</h3>
          <p className="font-medium text-sm text-secondary">
            Problems trying to resolve the conflict between
          </p>
        </div>
        <div className="max-w-[1440px] mx-auto flex lg:flex-col justify-center gap-6 md:max-w-[640px]">
          <div className="flex md:flex-col gap-6 lg:items-center lg:justify-center">
            <div className="flex w-[325px] h-[500px] md:w-[240px] relative">
              <div className="flex items-end p-6 absolute w-full h-full">
                <button className="bg-white font-bold w-44 h-12">MEN</button>
              </div>
              <img className="object-cover" src={edit1} alt="" />
            </div>
            <div className="flex w-[320px] h-[500px] md:w-[240px] sm:w-60 relative">
              <div className="flex items-end p-6 absolute w-full h-full">
                <button className="bg-white font-bold text-base w-32 h-12">
                  WOMEN
                </button>
              </div>
              <img
                className="object-cover w-[325px] h-[500px] md:w-60 md:h-[500px]"
                src={edit2}
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col flex-wrap lg:flex-row md:flex-col gap-6 md:items-center md:justify-center">
            <div className="w-[325px] flex md:w-60 h-60 relative">
              <div className="flex items-end p-3 absolute w-full h-full">
                <button className="bg-white font-bold text-base w-44 h-12">
                  ACCESSORIES
                </button>
              </div>
              <img className="w-[325px] object-cover" src={edit3} alt="" />
            </div>

            <div className="w-[325px] flex md:w-60 h-60 relative">
              <div className="flex items-end p-6 absolute w-full h-full">
                <button className="bg-white font-bold text-base w-32 h-12">
                  KIDS
                </button>
              </div>
              <img className="w-[325px] object-cover" src={edit4} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id="featured-products">
        <div className="flex flex-col gap-6 items-center">
          <h4 className="font-bold text-xl text-[#737373]">
            Featured Products
          </h4>
          <h3 className="font-bold text-2xl text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
          <p className="font-medium text-sm text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>
        <div className="mx-auto max-w-[1440px] flex flex-wrap items-start content-start gap-9 px-36 py-12 sm:items-center sm:justify-center">
          {bestSellerProducts.map((product, id) => (
            <ProductCard
              key={id}
              img={product.images[0].url}
              title={product.name}
              description={product.description}
              stock={product.stock}
              price={product.price}
              rating={product.rating}
              id={product.id}
              name={product.name}
              category={product.category_id}
            />
          ))}
        </div>
      </section>
      <section>
        <Carousel2 />
      </section>
      <section>
        <div className="mx-auto max-w-[1440px] flex flex-wrap justify-around items-center py-1 my-12">
          <img src={couple} alt="" />
          <div className="flex flex-col gap-9 max-w-md md:text-center md:mt-4">
            <h2 className="font-bold text-base text-secondary">SUMMER 2020</h2>
            <h3 className="font-bold text-5xl text-darkgray">
              Part of the Neural Universe
            </h3>
            <p className="font-normal text-xl text-secondary">
              We know how large objects will act, but things on a small scale.
            </p>
            <div className="flex gap-4 md:scale-75 sm:justify-center">
              <button className="w-fit font-bold text-sm text-[#FFFFFF] rounded-md bg-[#2DC071] py-3.5 px-10">
                BUY NOW
              </button>
              <button className="w-fit font-bold text-sm text-[#2DC071] rounded-md bg-[#FFFFFF] border-2 border-[#2DC071] py-3.5 px-10">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="post-card-section">
        <div className="flex justify-center py-24">
          <div className="flex flex-col gap-6 items-center max-w-md">
            <h4 className="font-bold text-sm text-[#23A6F0]">
              Practice Advice
            </h4>
            <h3 className="font-bold text-4xl text-[#252B42]">
              Featured Posts
            </h3>
            <p className="font-medium text-sm text-center text-secondary">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>
        <div className="flex justify-center flex-wrap gap-3">
          {postData.map((post, index) => (
            <PostCard
              key={index}
              image={post.image}
              tag1={post.tag1}
              tag2={post.tag2}
              tag3={post.tag3}
              title={post.title}
              description={post.description}
              date={post.date}
              comments={post.comments}
            />
          ))}
        </div>
      </section>
    </>
  );
}
