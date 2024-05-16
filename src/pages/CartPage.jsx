import { Icon } from "@iconify/react/dist/iconify.js";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  cleanCart,
  deleteFromCart,
  removeFromCart,
  toggleCheckbox,
} from "../store/actions/shoppingCartActions";

function CartPage() {
  const cart = useSelector((store) => store.shoppingCart.cart);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={`h-${
          cart.length === 0 ? "screen" : "full"
        } flex flex-col items-center justify-center max-w-[1440px] m-auto`}
      >
        <div
          className={`flex flex-col items-${
            cart.length === 0 ? "center" : "start"
          } justify-start w-full`}
        >
          {cart.length === 0 ? (
            <h2 className="text-3xl font-bold text-left">Cart is empty</h2>
          ) : (
            <h2 className="text-2xl font-semibold mb-4 text-left lg:pl-10 md:pl-8">
              Cart ({cart.reduce((a, b) => a + b.count, 0)} items)
            </h2>
          )}
        </div>

        <div className="flex flex-col text-center justify-center gap-2 w-full text-darkgray  md:mt-4">
          {cart.map((c, index) => (
            <div className="flex flex-col" key={index}>
              <div
                className={`flex items-center justify-between bg-${
                  index % 2 === 0 ? "darkgray" : "white"
                } bg-opacity-5 h-36 md:h-20`}
              >
                <div className="flex flex-row gap-4">
                  <div className="flex flex-col items-center justify-center">
                    <input
                      onClick={() => dispatch(toggleCheckbox(c.product))}
                      className="w-6 h-6"
                      type="checkbox"
                      id={index}
                      defaultChecked
                    />
                  </div>
                  <img
                    className="w-24 h-36 object-cover md:h-20 md:w-14"
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
                  ${c.product.price * c.count}
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
        <hr className="max-w-[1440px] text-secondary my-6" />
        {cart.length > 0 && (
          <div className="text-darkgray flex justify-end items-center font-semibold w-full mb-12 gap-2 sm:justify-center">
            <button
              onClick={() => dispatch(cleanCart())}
              className="w-48 bg-primary text-white font-semibold px-6 py-2.5 rounded-md"
            >
              Clean Cart
            </button>
            <p>
              Total: $
              {cart
                .filter((c) => c.checked)
                .reduce((a, b) => a + b.product.price * b.count, 0)
                .toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default CartPage;
