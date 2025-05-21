import { Link } from "react-router-dom";
import Button from "../components/ui/button";
import Container from "../components/ui/container";
import SEO from "../components/ui/seo";

const Terms = () => {
  return (
    <div className="mt-32 mb-90 ">
      <SEO
        title="Terms & Conditions"
        description="Terms & Conditions"
        content=" Terms & Conditions"
      />
      <Container className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Velotick</h1>
        <p className="text-gray-500">
          Your trusted partner for online bus ticket booking. Convenient, fast,
          and secure.
        </p>

        <div className="flex gap-5 ">
          <Link to="/login">
            <Button className=" inline bg-primary-90 text-white rounded-sm px-4 py-2 ">
              Book now
            </Button>
          </Link>
          <Link to="/conditions">
            <Button className="inline border border-primary-90 rounded-sm px-4 py-2">
              View Terms & Conditions
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Terms;
