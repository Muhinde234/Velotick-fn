import { Ellipsis } from "lucide-react";

const StatCard = ({ title, value, description, color }) => {
  const colorVariants = {
    blue: {
      bg: "bg-gradient-to-r from-[#10062b] to-[#420129]",
      text: "text-white",
      value: "text-white",
      border: "border-none",
    },
    green: {
      bg: "bg-gradient-to-r from-[#9e326d] to-[#f48e65]",
      text: "text-white",
      value: "text-white",
      border: "border-none",
    },
    orange: {
      bg: "bg-gradient-to-r from-[#b158fe] to-[#6483e8]",
      text: "text-white",
      value: "text-white",
      border: "border-none",
    },
    purple: {
      bg: "bg-gradient-to-r from-[#9e326d] to-[#f48e65]",
      text: "text-white",
      value: "text-white",
      border: "border-none",
    },
    red: {
      bg: "bg-gradient-to-r from-[#9e326d] to-[#f48e65]",
      text: "text-white",
      value: "text-white",
      border: "border-none",
    },
  };

  const variant = colorVariants[color] || colorVariants.blue;

  return (
    <div
      className={`rounded-lg  p-6 flex flex-col border ${variant.bg} ${variant.border}`}
    >
      <div className="flex justify-between">
        <h3
          className={`text-sm font-medium uppercase tracking-wider ${variant.text}`}
        >
          {title}
        </h3>
        <Ellipsis size={24} className="text-white" />
      </div>

      <p className={`mt-2 text-3xl font-semibold ${variant.value}`}>{value}</p>
      <p className={`mt-1 text-sm ${variant.text} capitalize`}>{description}</p>
    </div>
  );
};
export default StatCard;
