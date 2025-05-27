import DashboardCard from "../../components/dashboard-feature/dashboardcard";
import Topsection from "../../components/ui/topsection";
import { MoveDownRight, MoveUpRight, Plus } from "lucide-react";
import wallet from "../../assets/wallet.png";
import trend from "../../assets/trend.png";
import ticket from "../../assets/ticket.png";
import person from "../../assets/person.png";
import Button from "../../components/ui/button";
import avatar from "../../assets/avatar.png";
import SEO from "../../components/ui/seo";

const Dashboard = () => {
  const stats = [
    {
      title: "Total earnings",
      value: "120,000 rwf",
      description: "7%",
      color: "orange",
      icon: (
        <MoveUpRight className="inline text-blue-600 w-5 h-5 bg-white rounded-full p-1" />
      ),
      image: <img src={wallet} className="w-30" />,
    },
    {
      title: "Today's   Bookings",
      value: "3,653",
      description: "5%",
      color: "green",
      icon: (
        <MoveUpRight className="inline text-blue-600 w-5 h-5 bg-white rounded-full p-1" />
      ),
      image: <img src={ticket} className="w-30" />,
    },
    {
      title: "Successful Departures",
      value: "140/220",
      description: "5%",
      color: "indigo",
      icon: (
        <MoveDownRight className="inline text-red-600 w-5 h-5 bg-white rounded-full p-1" />
      ),
      image: <img src={trend} className="w-30" />,
    },
  ];

  return (
    <div className="px-6 bg-white max-h-screen ">
      <SEO
        title="Admin dashboard"
        description="Admin dashboard"
        content=" Admin dashboard"
      />
      <div>
        <Topsection />
      </div>

      <div className="flex gap-4  p-4 rounded-sm bg-gray-200 ">
        <div className="w-[75%]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => (
              <DashboardCard
                key={index}
                title={stat.title}
                value={stat.value}
                description={stat.description}
                color={stat.color}
                icon={stat.icon}
                image={stat.image}
              />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-12 bg-white  p-4 rounded-xl">
            <div className="flex justify-between ">
              <div className="flex flex-col">
                <p className="text-xl font-medium">Bus List</p>
                <p className="text-gray-600 text-sm">
                  Today's Active Buses 120
                </p>
              </div>
              <select className="rounded-full  text-xl border px-4  py-1 text-sm">
                <option>Active</option>
              </select>
            </div>
            <div className="flex  gap-10">
              <img
                src={avatar}
                alt="bus"
                className="w-10 h-10 inline bg-blue-300"
              />
              <div className="flex  flex-col  pr-6 border-r border-gray-500 ">
                <p className="font-bold">IGIRIMPUHWE Dositha</p>
                <p className="text-sm text-gray-600">Driver</p>
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl">Seats</h1>
                <p className="text-gray-600">Fully packed</p>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-[30%] group">
          <div className="relative">
            <img
              src={person}
              alt="person enjoying their journey"
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute  bottom-4 left-4 right-4  bg-opacity-70 text-white p-4 rounded-lg flex justify-between items-center">
              <p className="text-sm md:text-base ">
                Secure the seat and enjoy your journey!
              </p>
              <MoveUpRight className="w-6 h-6 bg-white rounded-full p-1 text-black group-hover:bg-blue-500 group-hover:text-white transition-colors" />
            </div>
          </div>
          <div className="flex  justify-between bg-white rounded-xl shadow-lg p-4 mt-4">
            <div className="flex flex-col">
              <p className="text-lg font-medium">Activity</p>
              <p className="text-gray-400 text-sm">
                Today is{" "}
                {new Date().toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>

            <Button className="flex items-center px-4 py-2 text-white bg-primary-100 hover:bg-primary-80 rounded-full text-sm font-medium transition-colors whitespace-nowrap mt-2">
              Add Bus <span className="ml-1 text-xl leading-none">＋</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
