import car from "../../assets/car.png";

const Logo = () => {
  return (
    <div className="flex items-center gap-3 mb-4">
      <img className="w-10 h-10" src={car} alt="logo" />
      <h1 className="text-3xl font-extrabold">VeloTick</h1>
    </div>
  );
};

export default Logo;
