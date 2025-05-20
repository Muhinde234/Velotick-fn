import DashboardCard from "../../components/dashboard-feature/dashboardcard";
import Topsection from "../../components/ui/topsection";
import {  MoveDownRight, MoveUpRight } from "lucide-react";
import wallet from "../../assets/wallet.png"

const Dashboard = () => {
 const stats = [
    {
      title: "Total earnings",
      value: "120,000 rwf",
      description: "7%",
      color: "orange",
      icon:<MoveUpRight className="inline text-blue-600 w-5 h-5 bg-white rounded-full p-1"/>,
      image:<img src={wallet}/>    },
    {
      title: "Active Buses",
      value: "65",
      description: "Buses currently in service",
      color: "green",
      icon:<MoveUpRight/>
    },
    {
      title: "In Maintenance",
      value: "35",
      description: "Buses in repair or check-up",
      color: "orange",
      icon:<MoveDownRight/>

    },
   
  ];



  return (
    <div className="p-6 bg-white ml-0 md:ml-64 max-h-screen">
      <div>
        <Topsection/>
      </div>
     
     <div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <DashboardCard
            key={index}
            title={stat.title}
            value={stat.value}
            description={stat.description}
            color={stat.color}
            icon={stat.icon}
          />
        ))}
      </div>
     </div>
     

       
     
    </div>
  );
};

export default Dashboard;