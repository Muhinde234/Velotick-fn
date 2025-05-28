import {Link} from "react-router-dom";
import car from "../../assets/car.png";
import Container from "../ui/container";
import SEO from "../ui/seo";
import RegisterForm from "./register_form.jsx";

const RegisterPage = () => {

  return (
    <Container className="h-screen flex flex-col justify-center items-center mt-12">
      <SEO
        title="Register page"
        description="Register page"
        content="Register page"
      />
      <div className="min-w-[540px] border border-gray-300 rounded-lg p-6">
        <div className="flex justify-center items-center gap-[16px]">
          <img className="w-[48px] h-[48px]" src={car} alt="logo" />
          <Link to="/">
            <h1 className="w-[144px] h-12 text-[2rem] font-extrabold">
              VeloTick
            </h1>
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center gap-[6px] mt-6">
          <h2 className="text-2xl font-extrabold">User Registration</h2>
          <p className="text-neutral-90">Fill in your details to register</p>
        </div>

        <div className="border-t border-gray-200 my-4"></div>

        <RegisterForm />
      </div>
    </Container>
  );
};

export default RegisterPage;
