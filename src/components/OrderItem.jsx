import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../store/actions/productActions";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

/* eslint-disable react/prop-types */
export default function OrderItem(props) {
  const { id, img, name, count, description } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const categories = useSelector((store) => store.global.categories);
  const product = useSelector((store) => store.product.selectedProduct);

  let link = "/";

  const handlePurchaseAgain = (id) => {
    dispatch(fetchProductById(id));

    const category = product.category_id;
    for (const ctg of categories) {
      if (category === ctg.id) {
        link +=
          ctg.code.slice(2) +
          "/" +
          id +
          "/" +
          name.toLowerCase().trim().replaceAll(" ", "-");
        break;
      }
    }

    history.push(link);
  };

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
          <button
            onClick={() => handlePurchaseAgain(id)}
            className="rounded-md p-4 bg-primary text-white w-36 h-12 text-xs"
          >
            Purchase Again
          </button>
          <button className="rounded-md border border-primary p-4 bg-white text-primary text-xs w-36 h-12">
            Rate this product
          </button>
        </div>
      </div>
    </div>
  );
}
