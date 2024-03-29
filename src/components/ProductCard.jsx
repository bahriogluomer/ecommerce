/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import { addToCart } from "../store/actions/shoppingCartActions";

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

  const handleCart = () => {
    dispatch(addToCart(props));
  };

  return (
    <div className="flex flex-col items-center m-auto w-[240px] h-[624px] bg-white border border-[#E7E7E7] shadow-sm relative">
      <div className="absolute top-2 left-1 flex font-semibold bg-darkgray bg-opacity-75 text-white text-xs px-2 py-1 rounded-full gap-1">
        <FontAwesomeIcon className="w-fit text-yellow-400" icon={faStar} />
        {rating}
      </div>
      <img className="min-w-[238px] h-[300px]" src={img} />
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
        <div className="flex gap-2">
          <Link to={link}>
            <button className="w-full bg-white font-semibold px-6 py-2.5 text-primary rounded-full border border-primary">
              Learn More
            </button>
          </Link>
          <button
            onClick={handleCart}
            className="border rounded-full border-primary  text-primary p-4"
          >
            <Icon icon="bi:cart" className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
