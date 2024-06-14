/* eslint-disable react/prop-types */
export default function OrderItem(props) {
  const { img, name, count, description } = props;

  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-4 justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src={img}
            className="h-24 w-16 object-cover"
            alt="product-image"
          />
          <div className="flex flex-col gap-1">
            <p>{name}</p>
            <p>Count: {count}</p>
            <p className="text-sm text-secondary">{description}</p>
          </div>
        </div>
        <div className=""></div>

        <div className="flex gap-2 sm:flex-col">
          <button className="rounded-md p-4 bg-primary text-white w-36 h-12 text-xs">
            Purchase Again
          </button>
          <button className="rounded-md p-4 bg-primary text-white text-xs w-36 h-12">
            Rate this product
          </button>
        </div>
      </div>
    </div>
  );
}
