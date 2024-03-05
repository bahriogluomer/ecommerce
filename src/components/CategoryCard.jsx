export default function CategoryCard(props) {
  const { backgroundImage, title, rating } = props;
  return (
    <div
      className="w-52 h-56 flex flex-col justify-center items-center gap-3"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <p className="font-bold text-white text-base">{title}</p>
      <p className="font-medium text-white text-basae">{rating}</p>
    </div>
  );
}
