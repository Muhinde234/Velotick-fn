import { CheckCircle } from "lucide-react";
import Container from "../components/ui/container";
import SEO from "../components/ui/seo";
import about from "../assets/about.jpg";

const About = () => {
  return (
    <div>
      <SEO title="About page" description="About page" content="About page" />
      <div>
        <Container className="pt-32">
          <div className="flex justify-center items-center">
            <img src={about} />
          </div>
          <div className="flex flex-col justify-center items-center mt-3 ">
            <div className="max-w-2xl text-center">
              <h1 className=" text-3xl font-bold lg:text-4xl foont-bold mb-3 text-primary-100 ">
                About us
              </h1>
              <p className="pt-3 mb-4 text-gray-500">
                We make bus travel simple and reliable by offering easy online
                booking, secure payments, and instant e-tickets. Our goal is to
                connect you to safe, comfortable journeys across the country
                anytime, anywhere.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <Container className="mt-32 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-18 mt-10">
          <div className="flex flex-col ">
            <h1 className="text-3xl text-primary-100 font-bold mb-4">
              Our mission
            </h1>
            <p className="text-gray-500">
              To improve passenger experience, minimizes fraud, and streamlines
              operations for transport companies using modern technology.
            </p>
            <ul className="space-y-4 mt-10">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-blue-600 w-6 h-6" />
                <span className="text-gray-600 text-[15px]">
                  Digitize cross-border bus booking with secure platforms
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-blue-600 w-6 h-6" />
                <span className="text-gray-600 text-[15px]">
                  Improve passenger experience via mobile and web
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-blue-600 w-6 h-6" />
                <span className="text-gray-600 text-[15px]">
                  Cut fraud and boost efficiency with smart tech
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col  ">
            <h1 className="text-3xl font-bold text-primary-100  mb-4">
              Our vision
            </h1>
            <p className="text-gray-500">
              To lead digital transportation in East Africa by making
              cross-border travel easier, safer, and smarter for passengers and
              transport companies
            </p>
            <ul className="space-y-4 mt-10">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-blue-600 w-6 h-6" />
                <span className="text-gray-600 text-[15px]">
                  Lead digital transport in East Africa
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-blue-600 w-6 h-6" />
                <span className="text-gray-600 text-[15px]">
                  Empower travel with safe, smart tech
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-blue-600 w-6 h-6" />
                <span className="text-gray-600 text-[15px]">
                  Connect regions through smart mobility
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
