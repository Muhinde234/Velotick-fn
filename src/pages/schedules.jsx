import Container from "../components/ui/container";
import SeatLayout from "../components/seatlayout";
import SEO from "../components/ui/seo";


const BusBooking = () => {

  return (
    <div className="mt-32 flex justify-center items-center min-h-screen ">
       <SEO title="schedules" description="schedules" content="schedules" />
      <Container>
        <SeatLayout />
      </Container>
    </div>
  );
};

export default BusBooking;
