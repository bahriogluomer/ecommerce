import { useSelector } from "react-redux";

export default function OrderSummaryBox() {
  const cart = useSelector((store) => store.shoppingCart.cart);

  const totalProductPrice = cart
    .filter((c) => c.checked)
    .reduce((a, b) => a + b.count * b.product.price, 0);
  const shippingPrice = 20.0;

  const totalPrice = totalProductPrice + shippingPrice;

  const subTotal = totalPrice - (totalProductPrice > 100 ? shippingPrice : 0);

  return (
    <>
      <div className="w-full p-2 font-semibold">
        <h2 className="text-2xl">Order Summary</h2>
        <div className="flex flex-col gap-2 pt-4 text-secondary">
          <div className="flex justify-between">
            <p>Total Price</p>
            <p>${totalProductPrice.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p>Shipping Price</p>
            <p>${shippingPrice.toFixed(2)}</p>
          </div>
          {totalProductPrice > 100 && (
            <div className="flex justify-between">
              <p>Free Shipping For Orders Above $100</p>
              <p className="text-green-500">-${shippingPrice.toFixed(2)}</p>
            </div>
          )}
        </div>
        <div className="text-xl pt-6 flex justify-between ">
          <p>Total</p>
          <p className="text-primary">${subTotal.toFixed(2)}</p>
        </div>
      </div>
    </>
  );
}
