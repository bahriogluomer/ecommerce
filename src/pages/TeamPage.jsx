import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { team2 } from "../data";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import teampic1 from "../assets/teampic1.png";
import teampic2 from "../assets/teampic2.png";
import teampic3 from "../assets/teampic3.png";
import teampic4 from "../assets/teampic4.png";
import teampic5 from "../assets/teampic5.png";

export default function TeamPage() {
  return (
    <>
      <section className="mt-18">
        <div>
          <p className="flex flex-col justify-center items-center text-base font-bold text-secondary">
            WHAT WE DO
          </p>
          <p className="text-darkgray text-5xl mt-5 flex flex-col text-center font-bold">
            Innovation tailored for you
          </p>
        </div>
        <div className="flex items-center justify-center mt-5 gap-4">
          <p className="font-bold text-darkgray">Home </p>
          <FontAwesomeIcon icon={faChevronRight} className="text-secondary" />
          <p className="text-secondary font-bold">Team</p>
        </div>
      </section>
      <section className="max-w-[1440px] m-auto ">
        <div className="flex py-12 gap-2 justify-center items-center md:flex-wrap md:flex-col">
          <div className="">
            <img src={teampic1} alt="" className="" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <img className="" src={teampic2} alt="" />
            <img className="" src={teampic3} alt="" />
            <img className="" src={teampic4} alt="" />
            <img className="" src={teampic5} alt="" />
          </div>
        </div>
      </section>
      <section id="team" className="flex flex-col my-20">
        <div className="max-w-[1440px] m-auto justify-center items-center p-24">
          <h3 className="text-darkgray font-bold text-4xl sm:text-3xl">
            Meet Our Team
          </h3>
        </div>
        <div className="max-w-[1440px] m-auto gap-6 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {team2.map((member, index) => (
            <div key={index} className="flex flex-col items-center ">
              <img className="" src={member.img} alt="" />
              <div className="flex flex-col gap-3 items-center pt-6  pb-9">
                <h5 className="font-bold text-base text-darkgray">
                  {member.title}
                </h5>
                <p className="font-bold text-sm text-secondary">
                  {member.department}
                </p>
                <div className="flex gap-5">
                  <button>
                    <FontAwesomeIcon
                      className="text-primary"
                      icon={faFacebook}
                      size="lg"
                    />
                  </button>
                  <button>
                    <FontAwesomeIcon
                      className="text-primary"
                      icon={faInstagram}
                      size="lg"
                    />
                  </button>
                  <button>
                    <FontAwesomeIcon
                      className="text-primary"
                      icon={faTwitter}
                      size="lg"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section
        id="cta"
        className="flex items-center justify-center flex-col my-10 gap-4 sm:text-center"
      >
        <p className="text-4xl text-darkgray font-bold">
          Start your 14 days free trial
        </p>
        <p className="text-base font-semibold w-[500px] text-center text-[#737373] sm:w-auto">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
        <button className="px-8 py-3 rounded bg-primary font-semibold text-white">
          Try it free now
        </button>
        <div className="flex  gap-4 text-2xl mt-4">
          <FontAwesomeIcon className="text-darkgray" icon={faTwitter} />
          <FontAwesomeIcon className="text-darkgray" icon={faFacebook} />
          <FontAwesomeIcon className="text-darkgray" icon={faInstagram} />
          <FontAwesomeIcon className="text-darkgray" icon={faLinkedin} />
        </div>
      </section>
    </>
  );
}
