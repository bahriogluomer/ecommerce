import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faCartShopping,
  faEnvelope,
  faHeart,
  faMagnifyingGlass,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Gravatar from "react-gravatar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((store) => store.user.userData);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="">
      <div className="flex flex-row flex-wrap justify-between items-center max-w-full bg-[#252B42] min-h-[58px] px-10 md:hidden">
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
      <div className="flex items-center justify-between gap-4 px-8 py-4 lg:gap-0 md:px-6">
        <nav className="flex items-center gap-4 px-6 md:px-1 md:gap-1">
          <div>
            <h3 className="text-2xl font-bold sm:text-xl text-darkgray">
              Bandage
            </h3>
          </div>
          <div className="flex justify-around font-bold ml-20 gap-4 text-secondary text-sm m-auto lg:ml-0 lg:gap-2 md:hidden">
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
              Team
            </NavLink>
          </div>
        </nav>
        <div className="max-w-full flex gap-4">
          <div className="flex justify-end items-center text-sm text-primary gap-4 lg:gap-2">
            {user ? (
              <div className="flex font-bold text-secondary items-center justify-center gap-4 mr-2 lg:gap-2 md:hidden">
                <div className="text-nowrap">Welcome {user.name}!</div>
                <div className="flex items-center justify-center">
                  <Gravatar
                    email={user.email}
                    className="min-w-6 min-h-6 max-w-8 max-h-8 rounded-full"
                  />
                </div>
              </div>
            ) : (
              <div className="flex gap-2 items-center md:hidden">
                <FontAwesomeIcon icon={faUser} className="color-primary" />
                <NavLink to="/login" className="font-semibold">
                  Login
                </NavLink>
                <span className="font-semibold">/</span>
                <NavLink to="/signup" className="font-semibold">
                  Register
                </NavLink>
              </div>
            )}
            <div className="flex gap-4 items-center lg:gap-2 md:text-darkgray">
              <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
              <FontAwesomeIcon icon={faCartShopping} size="lg" />
              <span>1</span>
              <FontAwesomeIcon icon={faHeart} size="lg" />
              <span>1</span>
            </div>
          </div>
          <div className="flex gap-4">
            <Gravatar
              email={user.email}
              className="w-6 h-6 rounded-full hidden md:block"
            />
            <button
              onClick={toggleNavbar}
              className="hidden md:flex md:items-center md:justify-center text-darkgray"
            >
              <FontAwesomeIcon icon={faBars} size="xl" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="hidden flex-col items-center justify-center my-10 md:flex">
          <nav className="flex w-full items-center justify-center">
            <div className="flex flex-col w-full font-bold gap-4 text-secondary text-center m-auto">
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
                Team
              </NavLink>
            </div>
          </nav>
          <div className="flex flex-col items-center text-primary gap-4 my-8">
            {user ? (
              <div className="flex font-bold text-secondary">
                Welcome {user.name}!
              </div>
            ) : (
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faUser} className="color-primary" />
                <NavLink to="/login" className="font-semibold">
                  Login
                </NavLink>
                <span className="font-semibold">/</span>
                <NavLink to="/signup" className="font-semibold">
                  Register
                </NavLink>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
