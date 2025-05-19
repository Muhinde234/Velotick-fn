import StatCard from "../../components/startcard";
import Topsection from "../../components/ui/topsection";
import { status } from "../../helpers/data";
import person from "../../assets/person.png";



const Dashboard = () => {
  return (
    <div className="p-6 bg-white ml-0 md:ml-64 max-h-screen ">
      <div>
     <Topsection/>
     
      </div>
      <div className="flex gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {status.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            description={stat.description}
            color={stat.color}
          />
        ))}
      </div>
      <div className="flex-col">
        <div className="relative">
          <img src={person}/>

        </div>


      </div>

      </div>
       


      
    </div>
  );
};

export default Dashboard;
    