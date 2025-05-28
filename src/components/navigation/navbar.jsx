import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Container from "../ui/container";
import Button from "../ui/button";
import { SquareMenu, X } from "lucide-react";
import Logo from "../ui/logo";
import { links } from "../../helpers/constants";
import { useUser } from "../../context/userContext.jsx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, logout } = useUser(); // Assume logout function exists
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
      <div className="fixed w-full top-0 z-50 bg-white border-b border-blue-100 shadow-sm p-4 lg:p-0">
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
                          `hover:text-blue-600 transition-colors duration-200 ${
                              isActive ? "font-medium text-blue-600" : ""
                          }`
                      }
                  >
                    {link.label}
                  </NavLink>
              ))}
            </nav>


            <div className="hidden md:block relative">
              {user?.firstname ? (
                  <div className="relative">
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="text-blue-600 font-semibold hover:underline"
                    >
                      {user.firstname} {user.lastname}
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-50 bg-white  rounded shadow-md z-50">
                          <Link
                              to="/my-tickets"
                              className="block px-4 py-2 text-sm hover:bg-blue-50"
                          >
                            My Tickets
                          </Link>
                          <button
                              onClick={handleLogout}
                              className="cursor-pointer block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                          >
                            Logout
                          </button>
                        </div>
                    )}
                  </div>
              ) : (
                  <Link to="/login" className="block px-4 py-2">
                    <Button className="w-full border border-blue-600 px-4 py-2 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                      Login
                    </Button>
                  </Link>
              )}
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 hover:text-blue-600 focus:outline-none transition-colors duration-200"
                  aria-label="Toggle Navigation Menu"
              >
                {isMenuOpen ? <X size={24} className="mr-8" /> : <SquareMenu size={24} className="mr-8" />}
              </button>
            </div>
          </div>
        </Container>

        {/* Mobile Menu */}
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

                {user?.firstname ? (
                    <>
                      <div className="px-4 py-2 text-blue-600 font-semibold">
                        {user.firstname} {user.lastname}
                      </div>
                      <Link
                          to="/my-tickets"
                          onClick={() => setIsMenuOpen(false)}
                          className="px-4 py-2 text-sm hover:bg-blue-50"
                      >
                        My Tickets
                      </Link>
                      <button
                          onClick={() => {
                            handleLogout();
                            setIsMenuOpen(false);
                          }}
                          className="text-left w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                      >
                        Logout
                      </button>
                    </>
                ) : (
                    <Link
                        to="/login"
                        className="block px-4 py-2"
                        onClick={() => setIsMenuOpen(false)}
                    >
                      <Button className="w-full border border-blue-600 px-4 py-2 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                        Login
                      </Button>
                    </Link>
                )}
              </nav>
            </div>
        )}
      </div>
  );
};

export default Navbar;
