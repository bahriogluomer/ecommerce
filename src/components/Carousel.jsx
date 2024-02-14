import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: "https://placeimg.com/800/400/nature",
    altText: "Slide 1",
    caption: "Slide 1 Caption",
  },
  {
    src: "https://placeimg.com/800/400/arch",
    altText: "Slide 2",
    caption: "Slide 2 Caption",
  },
  // Add more slides as needed
];

const myCarousel = () => {
  return (
    <div className="w-full">
      <UncontrolledCarousel items={items} />
    </div>
  );
};

export default myCarousel;
