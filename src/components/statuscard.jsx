const StatCard = ({ title, value, change, icon, bgColor }) => {
  return (
    <div
      className={`rounded-xl p-4 text-white w-full`}
      style={{ background: bgColor }}
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm font-light">{title}</p>
          <h2 className="text-xl font-bold">{value}</h2>
          <p className="text-xs mt-1">{change}</p>
        </div>
        <div>{icon}</div>
      </div>
    </div>
  );
};

export default StatCard;
