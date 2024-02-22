import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCartShopping,
  faEnvelope,
  faHeart,
  faMagnifyingGlass,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="">
      <div className="flex flex-row flex-wrap justify-between items-center max-w-full bg-[#252B42] min-h-[58px] px-10 sm:hidden">
        <div className="flex items-center gap-6">
          <div className="inline-flex  items-center gap-3 m=">
            <FontAwesomeIcon icon={faPhone} className="text-white" />
            <span className="text-white font-bold	text-sm	">(225) 555-0118</span>
          </div>
          <div className="inline-flex items-center gap-1">
            <FontAwesomeIcon icon={faEnvelope} className="text-white" />
            <span className="text-white font-bold	text-sm	">
              michelle.rivera@example.com
            </span>
          </div>
        </div>
        <div>
          <h6 className="text-white font-bold text-sm">
            Follow Us and get a chance to win 80% off
          </h6>
        </div>
        <div className="inline-flex gap-2">
          <span className="text-white text-sm font-bold">Follow Us:</span>
          <a href="">
            <FontAwesomeIcon
              icon={faInstagram}
              size="lg"
              style={{ color: "#ffffff" }}
            />
          </a>
          <a href="">
            <FontAwesomeIcon
              icon={faYoutube}
              size="lg"
              style={{ color: "#ffffff" }}
            />
          </a>
          <a href="">
            <FontAwesomeIcon
              icon={faFacebook}
              size="lg"
              style={{ color: "#ffffff" }}
            />
          </a>
          <a href="">
            <FontAwesomeIcon
              icon={faTwitter}
              size="lg"
              style={{ color: "#ffffff" }}
            />
          </a>
        </div>
      </div>
      <div className="flex shrink justify-between py-6 px-8 flex-wrap md:py-4 md:px-6">
        <nav className="flex items-center gap-6 px-8 md:gap-2">
          <div className="py-4">
            <h3 className="text-2xl font-bold">Bandage</h3>
          </div>
          <div className="flex shrink gap-4 font-bold text-secondary text-sm m-auto sm:flex-col ">
            <NavLink to="/" exact>
              Home
            </NavLink>
            <NavLink to="/products" exact>
              Shop
            </NavLink>
            <NavLink to="/about" exact>
              About
            </NavLink>
            <NavLink to="/" exact>
              Blog
            </NavLink>
            <NavLink to="/contact" exact>
              Contact
            </NavLink>
            <NavLink to="team" exact>
              Pages
            </NavLink>
          </div>
        </nav>
        <div className="flex shrink justify-end items-center text-primary gap-4 md:hidden sm:hidden">
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faUser} className="color-primary" />
            <span className="font-semibold">Login</span>
            <span className="font-semibold">/</span>
            <span className="font-semibold">Register</span>
          </div>
          <div className="flex gap-4 items-center">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
            <FontAwesomeIcon icon={faCartShopping} size="lg" />
            <span>1</span>
            <FontAwesomeIcon icon={faHeart} size="lg" />
            <span>1</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
