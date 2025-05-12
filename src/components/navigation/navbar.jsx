import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "../ui/container";
import Button from "../ui/button";
import {SquareMenu, X } from "lucide-react";
import Logo from "../ui/logo";
import { links } from "../../helpers/constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed w-full top-0 z-50  bg-white border-b border-blue-100 shadow-sm p-4  lg:p-0 ">
      <Container>
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-[18px] lg:text-[17px]">
            {links.map((link, idx) => (
              <NavLink
                key={idx}
                to={link.path}
                className={({ isActive }) =>
                  ` hover:text-blue-600 transition-colors duration-200 ${
                    isActive ? "font-medium text-blue-600" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link to="/login">
              <Button
                type="submit"
                className="border border-blue-600 px-4 py-2 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                Login
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2  hover:text-blue-600 focus:outline-none transition-colors duration-200"
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? <X size={24}  className="mr-8"/> : <SquareMenu size={24} className="mr-8" />}
            </button>
          </div>
        </div>
      </Container>

      {isMenuOpen && (
        <div className="md:hidden w-full bg-white shadow-lg">
          <nav className="flex flex-col gap-4 p-4">
            {links.map((link, idx) => (
              <NavLink
                key={idx}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200 ${
                    isActive ? "font-medium text-blue-600 bg-blue-50" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/LoginPage"
              className="block px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button
                type="submit"
                className="w-full border border-blue-600 px-4 py-2 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                Login
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
