import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactheroimg from "../assets/contactheroimg.png";
import curvedarrow from "../assets/curvedarrow.png";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function ContactPage() {
  return (
    <>
      <section className="m-auto max-w-[1440px] flex justify-between items-center sm:flex-col sm:gap-12">
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
      <section className=" mx-auto bg-lightgray1 flex items-center justify-center flex-col mt-10 p-24">
        <div className="max-w-[1440px] text-center flex flex-col mb-24">
          <h4 className="text-darkgray font-bold text-xs mb-6">
            VISIT OUR OFFICE
          </h4>
          <h3 className="text-darkgray font-bold text-4xl">
            We help small businesses
          </h3>
          <h3 className="text-darkgray font-bold text-4xl">with big ideas</h3>
        </div>
        <div className="flex flex-wrap items-center justify-center">
          <div className="bg-white w-80 h-[403px] flex flex-col items-center justify-center text-center gap-4">
            <FontAwesomeIcon icon={faPhone} className="text-6xl text-primary" />
            <p className="font-bold text-sm">georgia.young@example.com</p>
            <p className="font-bold text-sm">georgia.young@example.com</p>
            <h5 className="font-bold text-darkgray">Get Support</h5>
            <button className="text-primary font-semibold rounded-full py-4 px-6 border border-primary">
              Submit Request
            </button>
          </div>
          <div className="w-80 h-[403px] flex flex-col items-center justify-center text-center gap-4 bg-darkgray">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-6xl text-primary"
            />
            <p className="font-bold text-sm text-white">
              georgia.young@example.com
            </p>
            <p className="font-bold text-sm text-white">
              georgia.young@example.com
            </p>
            <h5 className="font-bold text-white">Get Support</h5>
            <button className="text-primary font-semibold rounded-full py-4 px-6 border border-primary">
              Submit Request
            </button>
          </div>
          <div className="bg-white w-80 h-[403px] flex flex-col items-center justify-center text-center gap-4">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-6xl text-primary"
            />
            <p className="font-bold text-sm">georgia.young@example.com</p>
            <p className="font-bold text-sm">georgia.young@example.com</p>
            <h5 className="font-bold text-darkgray">Get Support</h5>
            <button className="text-primary font-semibold rounded-full py-4 px-6 border border-primary">
              Submit Request
            </button>
          </div>
        </div>
      </section>
      <section className="max-w-[1440px] mx-auto flex flex-col items-center gap-12 my-24 p-6">
        <img className="w-16 h-16" src={curvedarrow} alt="" />
        <p className="font-bold text-base text-darkgray">
          WE CAN'T WAIT TO MEET YOU
        </p>
        <p className="font-bold text-6xl text-darkgray">Let’s Talk</p>
        <button className="bg-primary font-bold text-sm text-white px-10 py-3.5 rounded-md w-fit">
          Try it for free now
        </button>
      </section>
    </>
  );
}
