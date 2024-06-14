/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import { addToCart } from "../store/actions/shoppingCartActions";
import { toast } from "react-toastify";

export default function ProductCard(props) {
  const { id, img, title, description, stock, price, rating, name, category } =
    props;

  const categories = useSelector((store) => store.global.categories);
  const dispatch = useDispatch();

  let link = "/";

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

  const handleCart = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(addToCart(props));
    toast.success("Product added to cart", {
      position: "top-left",
      autoClose: 2000,
    });
  };

  return (
    <NavLink
      to={link}
      className="flex flex-col items-center m-auto w-[240px] h-[624px] bg-white border border-[#E7E7E7] shadow-sm relative hover:scale-105 transition-all"
    >
      <div className="absolute top-2 left-1 flex font-semibold bg-darkgray bg-opacity-75 text-white text-xs px-2 py-1 rounded-full gap-1">
        <FontAwesomeIcon className="w-fit text-yellow-400" icon={faStar} />
        {rating}
      </div>
      <img className="min-w-[238px] h-[300px] object-contain" src={img} />
      <div className="flex flex-col gap-3 items-center pt-6 pb-9 px-2">
        <h5 className="font-bold text-base text-[#252B42]">{title}</h5>
        <div className="flex flex-col justify-center text-center h-24">
          <p
            className="font-bold text-sm text-secondary 
        "
          >
            {description}
          </p>
        </div>

        <div className="flex gap-3">
          <h5 className="font-bold text-base text-[#BDBDBD]">Stock: {stock}</h5>
          <h5 className="font-bold text-base text-[#23856D]">$ {price}</h5>
        </div>
        <div className="flex gap-2">
          <button>
            <FontAwesomeIcon className="w-fit text-[#23A6F0]" icon={faCircle} />
          </button>
          <button>
            <FontAwesomeIcon className="w-fit text-[#23856D]" icon={faCircle} />
          </button>
          <button>
            <FontAwesomeIcon className="w-fit text-[#E77C40]" icon={faCircle} />
          </button>
          <button>
            <FontAwesomeIcon className="w-fit text-[#252B42]" icon={faCircle} />
          </button>
        </div>
        <div>
          <button
            onClick={handleCart}
            className="border rounded-md bg-primary text-white w-48 h-14 p-2 text-sm text-nowrap flex gap-2 items-center justify-center"
          >
            <p>Add to cart</p> <Icon icon="bi:cart" className="text-lg" />
          </button>
        </div>
      </div>
    </NavLink>
  );
}
