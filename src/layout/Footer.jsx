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
    <footer className="flex flex-col">
      <div className=" bg-[#FAFAFA] p-12  ">
        <div className="mx-auto  max-w-[1440px] flex items-center justify-between">
          <h3 className="font-mont text-2xl font-bold">Bandage</h3>
          <div className="flex gap-6">
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
      <hr className="w-[1440px] self-center" />

      <div className=" bg-[#FFFFFF] p-12 ">
        <div className="mx-auto max-w-[1440px] flex justify-between">
          {data.map((section, index) => (
            <div key={index} className="flex flex-col">
              <h5 className="font-mont font-bold text-base">{section.title}</h5>
              {section.items &&
                section.items.map((item, itemIndex) => (
                  <a
                    key={itemIndex}
                    className="text-[#737373] text-sm font-bold"
                    href=""
                  >
                    {item}
                  </a>
                ))}
            </div>
          ))}
          <div className="flex flex-col">
            <h5 className="font-bold text-base mb-4">Get In Touch</h5>
            <div className="items-center">
              <input
                placeholder="Your Email"
                className="rounded-l-md py-4 bg-[#F9F9F9]"
              />
              <button className="bg-[#23A6F0] px-4 py-4 text-sm rounded-r-md text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FAFAFA] p-6 ">
        <div className="mx-auto max-w-[1440px]">
          <p className="font-mont text-sm text-[#737373] font-bold">
            Made With Love By Finland All Right Reserved{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}
