import React, { useState, useEffect, useRef } from "react";
import "./Header.scss";
import WOW from "wow.js";
import Sourceimg from "../img/img5 crop.png";
import { Link } from "react-scroll";
import { FaLinkedin } from "react-icons/fa";
import { Facebook, Instagram } from "iconsax-react";

function Header() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle("menu-open");
  };

  useEffect(() => {
    const closeMobileMenu = (event) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
        document.body.classList.remove("menu-open");
      }
    };

    window.addEventListener("click", closeMobileMenu);

    return () => {
      window.removeEventListener("click", closeMobileMenu);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        id="Navbar"
        className="sticky top-0 left-0 right-0 w-full bg-white nav-bar sm:w-full z-10 drop-shadow-md"
      >
        <div className=" mx-10 px-10 flex items-center justify-between py-4 ">
          <div className="text-black font-bold text-3xl wow bounceIn" >
            I ❤️ MORRISVILLE
          </div>
          <nav>
            <div className="flex items-center justify-between md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-black hover:text-orange-600 focus:outline-none"
              >
                <svg
                  className="w-6 h-6 mx-11"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
            <ul
              className={`${
                isMobileMenuOpen ? "block" : "hidden"
              } md:flex md:space-x-6 tracking-widest justify-between items-center`}
            >
              <li>
                <Link
                  className="text-black font-sans hover:text-orange-600  font-medium font-sans cursor-pointer"
                  activeClass="active"
                  to="aboutsection"
                  spy={true}
                  smooth={true}
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  className="text-black font-sans hover:text-orange-600  font-medium font-sans cursor-pointer"
                  to="myplan"
                  spy={true}
                  smooth={true}
                >
                  MY PLAN
                </Link>
              </li>
              <li>
                <Link
                  className="text-black font-sans hover:text-orange-600  font-medium font-sans cursor-pointer"
                  to="whyme"
                  spy={true}
                  smooth={true}
                >
                  WHY ME?
                </Link>
              </li>
              <li className="">
                <Link
                  className="text-black font-sans hover:text-orange-600  font-medium font-sans cursor-pointer"
                  to="gallery"
                  spy={true}
                  smooth={true}
                >
                  GALLERY
                </Link>
              </li>
              <li>
                <Link
                  className="text-black font-sans hover:text-orange-600  font-medium font-sans cursor-pointer"
                  to="volunteer"
                  spy={true}
                  smooth={true}
                >
                  VOLUNTEER
                </Link>
              </li>
             
              <li>
                <Link
                  className="text-black font-sans hover:text-orange-600  font-medium font-sans cursor-pointer"
                  to="faqs"
                  spy={true}
                  smooth={true}
                >
                  FAQS
                </Link>
              </li>
              <li className="wow BounceIn">
                <Link
                  className="bg-orange-600 text-white font-bold py-2 px-3 rounded hover:text-indigo-900 wow bounceIn cursor-pointer"
                  to="donate"
                  spy={true}
                  smooth={true}
                >
                  DONATE
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {isMobileMenuOpen && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-40 "
          onClick={toggleMobileMenu}
        ></div>
      )}
      <div className={`overlay-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="flex">
          <div className="text-black font-bold text-3xl mx-4 " >
            I ❤️ MORRISVILLE
          </div>
          <button
            onClick={toggleMobileMenu}
            className="text-black hover:text-orange-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6 mx-11"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <ul className="flex flex-col space-y-6 p-7 ">
          <li className="list-disc">
            <Link
              className="text-black font-sans hover:text-orange-600  font-medium font-sans cursor-pointer"
              activeClass="active"
              to="aboutsection"
              spy={true}
              smooth={true}
            >
              ABOUT
            </Link>
          </li>
          <li className="list-disc">
            <Link
              className="text-black font-sans hover:text-orange-600  font-medium font-sans cursor-pointer"
              to="myplan"
              spy={true}
              smooth={true}
            >
              MY PLAN
            </Link>
          </li>
          <li className="list-disc">
            <Link
              className="text-black font-sans hover:text-orange-600  font-medium cursor-pointer"
              to="whyme"
              spy={true}
              smooth={true}
            >
              WHY ME?
            </Link>
          </li>
          <li className="list-disc">
            <Link
              className="text-black font-sans hover:text-orange-600  font-medium font-sans cursor-pointer"
              to="gallery"
              spy={true}
              smooth={true}
            >
              GALLERY
            </Link>
          </li>
          <li className="list-disc">
            <Link
              className="text-black font-sans hover:text-orange-600  font-medium font-sans cursor-pointer" 
              to="volunteer"
              spy={true}
              smooth={true}
            >
              VOLUNTEER
            </Link>
          </li>
         
          <li className="list-disc">
            <Link
              className="text-black font-sans hover:text-orange-600  font-medium font-sans cursor-pointer"
              to="faqs"
              spy={true}
              smooth={true}
            >
              FAQS
            </Link>
          </li>
          <li className="wow bounceIn">
            <Link
              className="bg-orange-600 text-white font-bold py-2 px-3 rounded hover:transition ease-in-out delay-150 focus:outline-none focus:shadow-outline cursor-pointer "
              to="donate"
              spy={true}
              smooth={true}
            >
              DONATE
            </Link>
          </li>
        </ul>
      </div>

      {/* SHUBBA REDDY */}
      <div  className="dashboard w-screen md:w-full h-fit ">
        <div className="mx-5  flex">
          <div className="flex flex-col md:flex-row">
            <div className=" md:w-4/5 lg:p-3px tracking-wider">
              <div className="wow fadeIn mt-5">
                <div className="text-white text-5xl leading-tight font-sans font-extrabold ">
                  VOTE
                </div>
                <div className="text-white text-6xl lg:text-8xl font-sans font-extrabold">
                  SUBBA
                </div>
                <div className="text-orange-600 text-6xl lg:text-8xl font-sans font-extrabold ">
                  MADIREEDY
                </div>
                <div className="text-white text-base font-sans font-bold ">
                  FOR MORRISVILLE TOWN COUNCIL
                </div>
              </div>

              <div className="mt-12 wow bounceIn">
                <Link
                  className="bg-orange-600 text-white focus:outline-none focus:shadow-outline hover:text-indigo-900 hover:transition ease-in-out delay-100 rounded-lg font-bold px-7 p-3 cursor-pointer"
                  to="donate"
                  spy={true}
                  smooth={true}
                >
                  DONATE
                </Link>
              </div>
              <div className="flex gap-3 mt-6">
                <a
                  href="https://www.instagram.com/subba4morrisvillecouncil/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram
                    size={32}
                    variant="Bold"
                    className="text-orange-600 hover:text-[#E4405F]"
                  />
                </a>
                <a
                  href="https://www.facebook.com/subba4morrisville"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook
                    size={32}
                    className="text-orange-600 hover:text-[#1877F2]"
                    variant="Bold"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/msubbareddy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={32} className="text-orange-600 hover:text-[#0A66C2]" />
                </a>
              </div>
            </div>
            <div className=" lg:mt-10 mt-5 mr-10 md:w-4/6 flex justify-self-center md:justify-center ">
              <img
                src={Sourceimg}
                alt="Your Image"
                className="h-auto md:w-100 md:h-100 lg:w-100 lg:w-auto "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
