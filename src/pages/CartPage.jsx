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
      <div className="h-screen flex flex-col items-center justify-center">
        {cart.length === 0 ? (
          <h2 className="text-3xl font-bold">Cart is empty</h2>
        ) : (
          <h2 className="text-3xl font-bold mb-4">Cart</h2>
        )}

        <div className="flex flex-col text-center justify-center gap-2 w-[1080px] sm:w-[320px] text-darkgray">
          {cart.map((c, index) => (
            <div className="flex flex-col" key={index}>
              <div
                className={`flex items-center justify-between bg-${
                  index % 2 === 0 ? "darkgray" : "white"
                } bg-opacity-15 h-36`}
              >
                <div className="flex gap-4">
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
                    className="w-24 h-36 object-fill"
                    src={c.product.img}
                    alt="img"
                  />
                  <div className="flex flex-col flex-wrap items-start justify-center w-[50px]">
                    <p className="font-semibold text-nowrap">
                      {c.product.title}
                    </p>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => dispatch(removeFromCart(c.product))}
                    className="font-semibold rounded-l-md p-2 border border-darkgray "
                  >
                    -
                  </button>
                  <span className="w-2 h-10 p-2">{c.count}</span>
                  <button
                    onClick={() => dispatch(addToCart(c.product))}
                    className="font-semibold rounded-r-md p-2 border border-darkgray"
                  >
                    +
                  </button>
                </div>
                <div className="font-semibold mr-2">
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
        <hr className="w-full text-secondary" />
        <div className="text-darkgray flex justify-end font-semibold w-[1080px] mt-4">
          <button
            onClick={() => dispatch(cleanCart())}
            className="w-48 bg-primary text-white font-semibold px-6 py-2.5 rounded-md sm:w-full"
          >
            Clean Cart
          </button>
          <p>
            Total: ${cart.reduce((a, b) => a + b.product.price * b.count, 0)}
          </p>
        </div>
      </div>
    </>
  );
}

export default CartPage;
