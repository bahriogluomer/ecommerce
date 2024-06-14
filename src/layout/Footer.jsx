import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const data = [
  {
    title: "Company Info",
    items: ["About Us", "Carrier", "We are hiring", "Blog"],
  },
  { title: "Legal", items: ["About Us", "Carrier", "We are hiring", "Blog"] },
  {
    title: "Features",
    items: [
      "Business Marketing",
      "User Analytics",
      "Live Chat",
      "Unlimited Support",
    ],
  },
  {
    title: "Resources",
    items: ["IOS & Android", "Watch a Demo", "Customers", "API"],
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col mt-auto">
      <div className=" bg-[#FAFAFA] p-12  ">
        <div className="mx-auto max-w-[1440px] flex items-center justify-between sm:flex-col sm: gap-4 sm:items-start">
          <h3 className="text-2xl font-bold">Bandage</h3>
          <div className="flex gap-6 bg-lightgray1">
            <a href="">
              <FontAwesomeIcon
                icon={faFacebook}
                size="lg"
                className="text-primary"
              />
            </a>
            <a href="">
              <FontAwesomeIcon
                icon={faInstagram}
                size="lg"
                className="text-primary"
              />
            </a>
            <a href="">
              <FontAwesomeIcon
                icon={faTwitter}
                size="lg"
                className="text-primary"
              />
            </a>
          </div>
        </div>
      </div>
      <hr className="max-w-[1440px] self-center" />

      <div className=" bg-white p-12">
        <div className="mx-auto max-w-[1440px] flex justify-between sm:flex-wrap sm:gap-4 sm:flex-col">
          {data.map((section, index) => (
            <div key={index} className="flex flex-col">
              <h5 className="font-bold text-base">{section.title}</h5>
              {section.items &&
                section.items.map((item, itemIndex) => (
                  <a
                    key={itemIndex}
                    className="text-secondary text-sm font-bold"
                    href=""
                  >
                    {item}
                  </a>
                ))}
            </div>
          ))}
          <div className="flex flex-col">
            <h5 className="font-bold text-base mb-4">Get In Touch</h5>
            <div className="items-center flex sm:justify-center sm:flex-wrap">
              <input
                placeholder="Your Email"
                className="rounded-l-md py-4 bg-lightgray1 sm:w-full sm:rounded-r-md"
              />
              <button className="bg-[#23A6F0] px-4 py-4 text-sm rounded-r-md text-white sm:w-full sm:rounded-l-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lightgray1 p-6 ">
        <div className="mx-auto max-w-[1440px] flex gap-2 sm:text-center sm:flex-col ">
          <p className="text-sm text-secondary font-bold">Made With Love By </p>

          <p className="text-sm text-secondary font-bold">
            Finland All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
