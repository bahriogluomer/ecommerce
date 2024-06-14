import { useEffect, useState } from "react";
import { axiosInstance } from "../axios/axiosInstance";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import OrderItem from "../components/OrderItem";
import OrderCard from "../components/OrderCard";

function PreviousOrdersPage() {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token");
  const history = useHistory();
  const reversedOrders = [...orders].reverse();

  useEffect(() => {
    axiosInstance
      .get("/order", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => setOrders(response.data))
      .then(() => console.log(orders))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto items-center justify-center mt-12 md:mb-12">
      <div className="flex flex-row md:justify-center">
        <p className="text-3xl text-start">Previous Orders</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 mt-8 mb-16">
        {orders.length > 0 ? (
          reversedOrders.map((order, index) => (
            <OrderCard
              key={index}
              id={order.id}
              order_date={order.order_date}
              card_name={order.card_name}
              price={order.price}
            >
              {order.products.map((product) => (
                <OrderItem
                  key={product.id}
                  img={product.images[0].url}
                  name={product.name}
                  description={product.description}
                  count={product.count}
                />
              ))}
            </OrderCard>
          ))
        ) : (
          <div className="flex flex-col gap-4 items-center justify-center">
            <p>No Orders yet</p>
            <button
              onClick={() => {
                history.push("/shopping");
              }}
              className="rounded-md p-4 bg-primary text-white"
            >
              Shop Now!
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PreviousOrdersPage;
