import { useState } from "react";
import Seat from "../components/ui/seat";
import Aside from "./aside";

const seatMap = [
  ["available", "available", null, null, "available"],
  ["reserved", "reserved", null, "selected", "reserved"],
  ["available", "available", null, "reserved", "available"],
  ["available", "available", null, "available", "available"],
  ["available", "available", null, "available", "available"],
  ["available", "available", null, "available", "available"],
  ["available", "available", null, "available", "available"],
  ["available", "available", null, "available", "available"],
  ["available", "available", null, "available", "available"],
  ["available", "available", null, "available", "available"],
  ["available", "available", null, "available", "available"],
  ["available", "available", null, "available", "available"],
  ["available", "available", "available", "available", "available"],
];

const SeatLayout = () => {
  const [seats, setSeats] = useState(seatMap);
  const seatPrice = 2000;

  const handleSeatClick = (rowIdx, colIdx) => {
    const seat = seats[rowIdx][colIdx];
    if (seat === "reserved") return;

    const newSeats = seats.map((row, rIdx) =>
      row.map((cell, cIdx) =>
        rIdx === rowIdx && cIdx === colIdx
          ? cell === "selected"
            ? "available"
            : "selected"
          : cell
      )
    );
    setSeats(newSeats);
  };

  const getSeatLabel = (rowIdx, colIdx) => {
    const rowNumber = rowIdx + 1;
    const seatLetters = ["A", "B", "D"];

    if (colIdx === 0) return `A${rowNumber}`;
    if (colIdx === 1) return `B${rowNumber}`;
    if (colIdx === 4) return `D${rowNumber}`;

    return "";
  };

  const selectedSeatsCount = seats
    .flat()
    .filter((seat) => seat === "selected").length;
  const availableSeatsCount = seats
    .flat()
    .filter((seat) => seat === "available").length;
  const totalSeatsCount = seats.flat().filter((seat) => seat !== null).length;

  return (
    <div className="flex flex-col p-4">
      <div className="text-start mb-6">
        <h2 className="text-2xl font-bold">Schedule details</h2>
        <p className="text-lg text-gray-600">
          Select the seats to start booking and ticket buying
        </p>
      </div>

      <main className="flex flex-col lg:flex-row gap-8">
        <div className="w-[804px] px-48">
          <div className="flex flex-col justify-center items-center">
            <div className="flex space-x-6 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-300 rounded-sm"></div>
                <span className="text-sm">Reserved</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white border border-gray-300 rounded-sm"></div>
                <span className="text-sm">Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-yellow-200 border border-yellow-200 rounded-sm"></div>
                <span className="text-sm">Selected</span>
              </div>
            </div>

            <div className="lg:ml-38 border border-gray-300 rounded-xl p-6 bg-white shadow-sm">
              {seats.map((row, rowIdx) => (
                <div key={rowIdx} className="flex justify-center gap-10 mb-3">
                  {row.map((status, colIdx) =>
                    status === null ? (
                      <div key={colIdx} className="w-12 h-12"></div>
                    ) : (
                      <Seat
                        key={`${rowIdx}-${colIdx}`}
                        status={status}
                        label={getSeatLabel(rowIdx, colIdx)}
                        onClick={() => handleSeatClick(rowIdx, colIdx)}
                      />
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <Aside />
      </main>
    </div>
  );
};

export default SeatLayout;
