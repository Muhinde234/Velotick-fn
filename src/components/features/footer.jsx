import Container from "../ui/container";
import { Link, NavLink } from "react-router-dom";
import Logo from "../ui/logo";
import { links } from "../../helpers/constants";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
   const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  return (
    <footer className="bg-[#2356CF] text-white py-8 mt-20 p-4 ">


      <Container>
        <div className="mb-12 p-6 sm:p-8  ">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-3">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-white text-[15px] max-w-2xl mx-auto mb-6">
              Subscribe to receive the latest job opportunities, industry news,
              and healthcare staffing insights directly to your inbox.
            </p>

            {isSubscribed ? (
              <div className="bg-green-50 text-green-700 p-4 rounded-lg">
                Thank you for subscribing! You'll receive our next newsletter
                soon.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-2 border-2 border-blue-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-2 bg-blue-500 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors disabled:opacity-70  cursor-pointer"
                >
                  {isLoading ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
            )}
          </div>
         </div>
        <div className="flex flex-col lg:flex-row justify-around lg:gap-12">
          <div className="flex flex-col items-start">
            <Link to="/">
              <Logo />
            </Link>

            <p>Your journey,our priority</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-gray-300 font-bold text-lg">Quick Links</p>
            <nav className="flex flex-col gap-2">
              {links.map((link, idx) => (
                <NavLink
                  key={idx}
                  className="hover:text-gray-300 transition-colors"
                  to={link.path}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-gray-300 font-bold text-lg">Socials</p>
            <nav className="flex flex-col gap-2">
              <a
                href="mailto:support@velotick.com"
                className="hover:text-gray-300 transition-colors"
              >
                support@velotick.com
              </a>
              <a
                href="tel:+250780396766"
                className="hover:text-gray-300 transition-colors"
              >
                +250 780 396 766
              </a>
              <span>Kigali, Rwanda</span>
            </nav>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-gray-300 font-bold text-lg">our services</p>
            <p>ticket Bookings</p>
            <p>Online Payments</p>
            <p>Mobile Access</p>
            <p>24/7 customersupport</p>
          </div>
        
        </div>

        <div className="mt-8 pt-6 border-t border-blue-400 text-center text-sm text-gray-300">
          © {new Date().getFullYear()}{" "}
          <span className="font-bold">VeloTick</span>. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
