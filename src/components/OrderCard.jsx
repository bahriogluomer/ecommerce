/* eslint-disable react/prop-types */
export default function OrderCard(props) {
  const { id, order_date, card_name, price, children } = props;
  return (
    <div className="rounded-md border border-gray-200 p-4 w-full">
      <div className="flex justify-around gap-4 text-secondary font-semibold">
        <p>Order ID: {id}</p>{" "}
        <p>
          Order Date: {order_date.slice(0, 10)} / {order_date.slice(11, 16)}
        </p>
        <p>Recipient: {card_name}</p>
        <p>Total: ${price}</p>
      </div>
      <hr className="w-full my-4" />
      <div className="flex flex-col w-full gap-2 ">{children}</div>
    </div>
  );
}
