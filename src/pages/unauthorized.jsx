// pages/Unauthorized.jsx
import Container from "../components/ui/container";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <Container className="h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">403 - Unauthorized</h1>
        <p className="mb-4">You don't have permission to access this page.</p>
        <Link to="/" className="text-blue-600 hover:underline">
          Return to Home
        </Link>
      </div>
    </Container>
  );
};

export default Unauthorized;