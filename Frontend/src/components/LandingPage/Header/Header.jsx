import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ButtonSecondary from "../../utility/Button/ButtonSecondary";
import ButtonPrimary from "../../utility/Button/ButtonPrimary";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = async (targetId, targetRoute) => {
    if (location.pathname !== targetRoute) {
      await navigate(targetRoute, { replace: true });
    }
    setTimeout(() => {
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  
  const scrollToFeatures = () => scrollToSection("features", "/");
  const scrollToFAQ = () => scrollToSection("faq", "/contact");
  
  return (
    <header className="bg-lightOrange py-4 px-12 md:px-[10%] w-full border-2">
      <div className="container mx-auto flex flex-col gap-2 items-start md:flex-row md:justify-between md:items-center">
        <Link to="/" className="flex items-center">
          <img
            src="/LearnovationAcademyLogo.png"
            alt="Learnnovation Academy Logo"
            className="h-20"
          />
        </Link>
        <nav className="flex">
          <ul className="flex flex-col gap-2 items-start md:flex-row md:gap-5 text-lg font-medium md:items-center">
            <li>
            {location.pathname === "/contact" ?  (
               <button
               onClick={scrollToFAQ}
               className="text-gray-700 hover:text-gray-900 cursor-pointer"
             >
               FAQ
             </button>
            ):(
              <button
              onClick={scrollToFeatures}
              className="text-gray-700 hover:text-gray-900 cursor-pointer"
            >
              Features
            </button>
           )}
            </li>
            <li>
              {location.pathname === "/contact" ? (
                <Link
                to="/"
                className="text-gray-700 hover:text-gray-900 cursor-pointer"
              >
                Home
              </Link>
                
              ) : (
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-gray-900 cursor-pointer"
                >
                  Contact
                </Link>
              )}
            </li>
            <li className="hidden md:block">
              <ButtonPrimary
                size={"lg"}
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Sign Up
              </ButtonPrimary>
            </li>
            <li className="hidden md:block">
              <ButtonSecondary
                size={"lg"}
                color={"gray"}
                onClick={() => {
                  navigate("/login");
                }}
              >
                Log In
              </ButtonSecondary>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
