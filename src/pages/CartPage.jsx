import { Icon } from "@iconify/react/dist/iconify.js";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  cleanCart,
  deleteFromCart,
  removeFromCart,
  toggleCheckbox,
} from "../store/actions/shoppingCartActions";
import OrderSummaryBox from "../components/OrderSummaryBox";

function CartPage() {
  const cart = useSelector((store) => store.shoppingCart.cart);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={`h-full flex flex-col items-between justify-start max-w-[1440px] mx-auto mt-12`}
      >
        <div
          className={`flex flex-col items-${
            cart.length === 0 ? "center" : "start"
          } justify-start w-full`}
        >
          {cart.length === 0 && (
            <h2 className="text-3xl font-bold text-left">Cart is empty</h2>
          )}
        </div>
        <div className="flex gap-6 justify-around md:flex-col">
          <div className="flex flex-col basis-[70%] text-center mx-auto w-full text-darkgray md:mt-4">
            {cart.map((c, index) => (
              <div className="flex flex-col" key={index}>
                <div
                  className={`flex items-center justify-around bg-${
                    index % 2 === 0 ? "darkgray" : "white"
                  } bg-opacity-5 h-28 md:h-20`}
                >
                  <div className="flex flex-row gap-4 place-items-center">
                    <div className="flex flex-col items-center justify-center">
                      <input
                        onClick={() => dispatch(toggleCheckbox(c.product))}
                        className="w-5 h-5 rounded-md"
                        type="checkbox"
                        id={index}
                        defaultChecked
                      />
                    </div>
                    <img
                      className="w-28 h-28 object-cover md:h-20 md:w-14"
                      src={c.product.img}
                      alt="img"
                    />
                    <div className="flex items-center justify-between gap-4 flex-1 md:flex-col sm:gap-1 w-[500px] md:w-[300px] sm:w-[200px] ml-4">
                      <p className="font-semibold text-nowrap">
                        {c.product.title}
                      </p>
                      <div className="flex flex-row gap-1">
                        <button
                          onClick={() => dispatch(removeFromCart(c.product))}
                          className="font-semibold rounded-l-md px-2 py-1 border border-darkgray "
                        >
                          -
                        </button>
                        <div className="flex items-center justify-center w-2 h-10 p-2 text-center">
                          {c.count}
                        </div>
                        <button
                          onClick={() => dispatch(addToCart(c.product))}
                          className="font-semibold rounded-r-md px-2 py-1 border border-darkgray"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="block font-semibold mr-2 sm:hidden">
                    ${(c.product.price * c.count).toFixed(2)}
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        dispatch(deleteFromCart(c.product));
                      }}
                      className="font-semibold mr-2"
                    >
                      <Icon icon="ph:trash" fontSize={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {cart.length > 0 && (
            <div className="flex flex-col basis-[30%] gap-4">
              <div className="">
                <OrderSummaryBox />
              </div>
              <button className="w-full bg-primary text-white font-semibold px-6 py-2.5 rounded-md">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CartPage;
