import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartArea,
  faChevronRight,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

export default function PostCard(props) {
  const { image, tag1, tag2, tag3, title, description, date, comments } = props;
  return (
    <div className="flex justify-center gap-3">
      <div>
        <div className="flex flex-col items-center pb-36">
          <div>
            <div className="absolute bg-[#E74040] font-bold text-white text-lg m-3 px-2.5 rounded">
              New
            </div>
            <img className="w-80 h-80" src={image} alt="" />
          </div>

          <div className="w-80 h-80 flex flex-col gap-3 px-3  pt-6 shadow-md">
            <div className="flex justify-start gap-3">
              <button className="font-medium text-sm text-primary">
                {tag1}
              </button>
              <button className="font-medium text-sm">{tag2}</button>
              <button className="font-medium text-sm">{tag3}</button>
            </div>
            <h4 className="font-bold text-xl text-[#252B42]">{title}</h4>
            <p className="font-semibold text-sm text-[#737373]">
              {description}
            </p>
            <div className="flex justify-between gap-3">
              <p className="flex items-center gap-2 font-medium text-sm text-[#737373]">
                <FontAwesomeIcon icon={faClock} className="text-primary" />{" "}
                {date}
              </p>
              <p className="flex items-center gap-2 font-medium text-sm text-[#737373]">
                <FontAwesomeIcon
                  icon={faChartArea}
                  size="lg"
                  className="text-[#23856D]"
                />
                {comments}
              </p>
            </div>
            <div className="flex items-center">
              <h6 className="font-bold text-sm text-[#737373]">Learn More</h6>
              <button className="">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-primary mx-2"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
