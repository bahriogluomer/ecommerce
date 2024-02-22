import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function ProductCard(props) {
  const { img, title, category, oldPrice, newPrice } = props;
  return (
    <div className="flex flex-col items-center m-auto bg-white">
      <img className="min-w-[239px] min-h-[280px]" src={img} />
      <div className="flex flex-col gap-3 items-center pt-6  pb-9">
        <h5 className="font-mont font-bold text-base text-[#252B42]">
          {title}
        </h5>
        <p className="font-mont font-bold text-sm text-[#737373]">{category}</p>
        <div className="flex gap-3">
          <h5 className="font-mont font-bold text-base text-[#BDBDBD]">
            {oldPrice}
          </h5>
          <h5 className="font-mont font-bold text-base text-[#23856D]">
            {newPrice}
          </h5>
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
      </div>
    </div>
  );
}
