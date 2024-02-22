import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import aboutuspic from "../assets/aboutuspic.png";
import aboutwoman from "../assets/aboutwoman.png";
import video from "../assets/video.png";
import { team1 } from "../data";
import BrandsBanner from "../components/BrandsBanner.jsx";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const data = [
  { count: "15K", label: "Happy Customers" },
  { count: "150K", label: "Monthly Visitors" },
  { count: "15", label: "Countries Worldwide" },
  { count: "100+", label: "Top Partners" },
];

export default function AboutPage() {
  return (
    <>
      <section className="m-auto max-w-[1440px] flex justify-between sm:flex-col sm:items-center">
        <div className="flex flex-col items-start gap-9 justify-center w-96 sm:text-center sm:items-center">
          <h5 className="font-bold text-base text-dark-text-color sm:hidden">
            ABOUT COMPANY
          </h5>
          <h2 className="font-bold text-6xl text-dark-text-color sm:text-2xl">
            ABOUT US
          </h2>
          <h4 className="font-bold text-base text-secondary">
            We know how large objects will act, but things on a small scale
          </h4>
          <button className="bg-primary text-white px-10 py-3.5 rounded-md font-semibold">
            Get Quote Now
          </button>
        </div>
        <div className="sm:w-[387px] sm:h-[440px]">
          <img src={aboutuspic} alt="" />
        </div>
      </section>
      <div className="py-12">
        <div className="max-w-[1440px] m-auto flex flex-wrap justify-around items-center gap-24 py-24">
          <div className="flex flex-col flex-wrap gap-8 w-96 sm:text-center">
            <p className="text-red-500 font-semibold text-sm">
              Problems trying
            </p>
            <h3 className="text-[#252B42] font-bold text-2xl">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent.
            </h3>
          </div>
          <div className="w-[545px]">
            <p className="font-semibold text-secondary text-sm flex flex-wrap sm:text-center">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>
        <div className="m-auto max-w-[1440px] flex flex-wrap items-center justify-between py-12 sm:flex-col sm:gap-1">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <p className="font-bold text-6xl text-[#252B42] pb-2">
                {item.count}
              </p>
              <p className="font-bold text-base text-secondary">{item.label}</p>
            </div>
          ))}
        </div>
        <section id="video">
          <div className="flex justify-center items-center py-12">
            <img className="rounded-xl" src={video} alt="" />
            <button className="absolute bg-primary rounded-full items-center justify-center w-20 h-20">
              <FontAwesomeIcon
                className="text-white text-3xl m-auto"
                icon={faPlay}
                size="lg"
              />
            </button>
          </div>
        </section>
      </div>
      <section id="team" className="custom-container flex flex-col">
        <div className="flex flex-col justify-center items-center gap-3">
          <p className="text-darkgray font-bold text-4xl ">Meet Our Team</p>
          <p className="text-darkgray font-semibold text-sm text-center w-2/5">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <div className="flex justify-center flex-wrap gap-9 py-16">
          {team1.map((member, index) => (
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
      <section id="big-companies" className="py-10 bg-lightgray1">
        <div className="m-auto max-w-[1440px] flex flex-col gap-9 justify-center items-center ">
          <h3 className="font-bold text-4xl text-darkgray sm:text-center">
            Big Companies Are Here
          </h3>
          <p className="font-semibold text-sm text-second-text-color text-center w-2/5">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
      </section>
      <section
        id="brands-banner"
        className="bg-lightgray1 flex items-center justify-center"
      >
        <BrandsBanner />
      </section>
      <section id="cta" className="max-w-[1440px] m-auto flex">
        <div className="bg-[#2A7CC7] text-white p-48 sm:text-center sm:p-24">
          <div className="flex flex-col gap-9 sm:items-center">
            <h3 className="font-bold text-base"> WORK WITH US</h3>
            <h4 className="font-bold text-4xl">Now Let's grow Yours</h4>
            <p className="font-medium text-sm">
              The gradual accumulation of information about atomic and
              small-scale behavior during the first quarter of the 20th
            </p>
            <button className="font-bold border-2 border-white rounded px-10 py-3.5 w-fit">
              Button
            </button>
          </div>
        </div>
        <div className="md:hidden sm:hidden">
          <img src={aboutwoman} alt="" className="w-[968px] h-[652px]" />
        </div>
      </section>
    </>
  );
}
