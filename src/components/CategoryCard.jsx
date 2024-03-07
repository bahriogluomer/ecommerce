import { NavLink } from "react-router-dom";

export default function CategoryCard(props) {
  const { backgroundImage, title, rating, gender } = props;
  return (
    <>
      <NavLink
        to={`/shopping/${gender}/${title}`}
        className="w-52 h-56 flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="h-full w-full flex flex-col items-center justify-center">
          <p className="font-bold text-white text-base">{title}</p>

          <p className="font-medium text-white text-base">{rating}</p>
        </div>
      </NavLink>
    </>
  );
}
