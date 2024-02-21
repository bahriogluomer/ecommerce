import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactheroimg from "../assets/contactheroimg.png";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function ContactPage() {
  return (
    <>
      <section className="m-auto max-w-[1440px] flex justify-between items-center sm:flex-col">
        <div className="flex flex-col w-1/3 gap-9 sm:text-center min-w-[380px]">
          <p className="font-bold text-base text-darkgray">CONTACT US</p>
          <p className="font-bold text-6xl text-darkgray sm:text-3xl">
            Get in touch today!
          </p>
          <p className="font-medium text-xl text-secondary">
            We know how large objects will act, but things on a small scale
          </p>
          <p className="font-bold text-2xl text-darkgray">
            Phone : +451 215 215
          </p>
          <p className="font-bold text-2xl text-darkgray">Fax : +451 215 215</p>
          <div className="flex gap-6 items-center sm:justify-center">
            <FontAwesomeIcon
              className="text-darkgray"
              icon={faTwitter}
              size="xl"
            />
            <FontAwesomeIcon
              className="text-darkgray"
              icon={faFacebook}
              size="xl"
            />
            <FontAwesomeIcon
              className="text-darkgray"
              icon={faInstagram}
              size="xl"
            />
            <FontAwesomeIcon
              className="text-darkgray"
              icon={faLinkedin}
              size="xl"
            />
          </div>
        </div>
        <div className="sm:w-[380px] sm:h-[440px]">
          <img src={contactheroimg} alt="" />
        </div>
      </section>
    </>
  );
}
