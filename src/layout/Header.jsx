import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faChevronDown,
  faEnvelope,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Gravatar from "react-gravatar";
import { logOut } from "../store/actions/userActions";
import { toast } from "react-toastify";
import { Icon } from "@iconify/react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

const Header = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const user = useSelector((store) => store.user.userData);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  let dropDownRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setIsDropDownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const logoutHandler = () => {
    dispatch(logOut());
    localStorage.removeItem("token");
    toast.success("Logged out successfully");
  };

  const categories = useSelector((store) => store.global.categories);
  const mens = categories.filter((c) => c.gender === "e");
  const womens = categories.filter((c) => c.gender === "k");

  const cart = useSelector((store) => store.shoppingCart.cart);

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
        <nav className="flex items-center gap-4 px-2 md:gap-1">
          <div>
            <h3 className="text-2xl font-bold sm:text-xl text-darkgray">
              Bandage
            </h3>
          </div>
          <div className="flex justify-around font-bold ml-20 gap-4 text-secondary text-sm m-auto lg:ml-0 lg:gap-2 md:hidden">
            <NavLink to="/" exact>
              Home
            </NavLink>
            <div id="drop-down-menu">
              <button
                onClick={toggleDropdown}
                className="text-secondary focus:outline-none flex items-center flex-nowrap"
              >
                Shop <FontAwesomeIcon icon={faChevronDown} />
              </button>
              {isDropDownOpen && (
                <div
                  ref={dropDownRef}
                  className="flex items-start justify-center gap-1 absolute mt-2 w-64 p-10 bg-white shadow-lg rounded-md z-10"
                >
                  <div className="flex flex-col text-center">
                    <h3>Erkek</h3>
                    {mens.map((c, id) => (
                      <NavLink
                        onClick={() => setIsDropDownOpen(false)}
                        to={`/shopping/${c.gender}/${c.title.toLowerCase()}`}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                        key={id}
                      >
                        {c.title}
                      </NavLink>
                    ))}
                  </div>
                  <div className="flex flex-col text-center">
                    <h3>Kadın</h3>
                    {womens.map((c, id) => (
                      <NavLink
                        onClick={() => setIsDropDownOpen(false)}
                        to={`/shopping/${c.gender}/${c.title.toLowerCase()}`}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                        key={id}
                      >
                        {c.title}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
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
                <p className="text-nowrap text-primary font-semibold">
                  Welcome {user.name}!
                </p>
                <div className="flex items-center justify-center">
                  {/* temporarily put logoutHandler function here until modal is implemented */}
                  <button onClick={logoutHandler}>
                    <Gravatar
                      email={user.email}
                      className="min-w-6 min-h-6 max-w-8 max-h-8 rounded-full"
                    />
                  </button>
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
            <div className="flex gap-4 items-center lg:gap-2 md:text-darkgray text-lg justify-center">
              <Icon icon="bi:search" className="text-xl" />
              <button>
                <Icon icon="bi:cart" className="text-xl" />
              </button>
              <span>{cart.length ? cart.length : 0}</span>
              <Icon icon="ph:heart-light" className="text-2xl" />
              <span>1</span>
            </div>
          </div>
          <div className="flex gap-4">
            {/* temporarily put logout function here until modal is implemented */}
            <button onClick={logoutHandler}>
              <Gravatar
                email={user?.email}
                className="w-6 h-6 rounded-full hidden md:block"
              />
            </button>

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
            <div className="flex flex-col items-center justify-center w-full font-bold gap-4 text-secondary text-center m-auto">
              <NavLink to="/" exact>
                Home
              </NavLink>
              <div id="drop-down-menu">
                <button
                  onClick={toggleDropdown}
                  className="text-secondary focus:outline-none flex items-center flex-nowrap"
                >
                  Shop <FontAwesomeIcon icon={faChevronDown} />
                </button>
                {isDropDownOpen && (
                  <div
                    ref={dropDownRef}
                    id="category-drop-down-menu"
                    className="flex items-start justify-center gap-1 absolute top-38 right-28 mt-2 w-64 p-10 bg-white shadow-lg rounded-md z-10"
                  >
                    <div className="flex flex-col text-center">
                      <h3>Erkek</h3>
                      {mens.map((c, id) => (
                        <NavLink
                          onClick={toggleDropdown}
                          to={`/shopping/${c.gender}/${c.title}`}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                          key={id}
                        >
                          {c.title}
                        </NavLink>
                      ))}
                    </div>
                    <div className="flex flex-col text-center">
                      <h3>Kadın</h3>
                      {womens.map((c, id) => (
                        <NavLink
                          onClick={toggleDropdown}
                          to={`/shopping/${c.gender}/${c.title}`}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                          key={id}
                        >
                          {c.title}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
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
