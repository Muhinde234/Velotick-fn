import clsx from "clsx";

const Seat = ({ status = "available", onClick }) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "w-10 h-10 border rounded-sm cursor-pointer flex items-center justify-center",
        status === "available" && "bg-white border-gray-300",
        status === "reserved" &&
          "bg-gray-300 border-gray-300 cursor-not-allowed",
        status === "selected" && "bg-yellow-200 border-yellow-200"
      )}
    ></div>
  );
};

export default Seat;
