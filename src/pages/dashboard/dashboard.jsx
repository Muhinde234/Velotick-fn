import { dashboardStats} from "../../helpers/data"


const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        { dashboardStats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
    