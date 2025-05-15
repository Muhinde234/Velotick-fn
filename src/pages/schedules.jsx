import Container from "../components/ui/container";
import SeatLayout from "../components/seatlayout";


const BusBooking = () => {

  return (
    <div className="mt-32 flex justify-center items-center min-h-screen ">
      <Container>
        <SeatLayout />
      </Container>
    </div>
  );
};

export default BusBooking;
