import Container from "../ui/Container";
import { Link, NavLink } from "react-router-dom";
import Logo from "../ui/logo";
import { links } from "../../helpers/constants";

const Footer = () => {
  return (
    <footer className="bg-[#2356CF] text-white py-8 mt-20 p-4 ">
      <Container>
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
          <p className="text-sm lg:text-base max-w-md">
            Every journey begins with a single ticket. At VeloTick, we make sure
            your travels are smooth, reliable, and stress-free. Book with
            confidence, ride with comfort, and let the road take you where you
            belong.
          </p>
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
