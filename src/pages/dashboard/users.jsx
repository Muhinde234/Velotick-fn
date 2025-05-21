import { useState } from "react";
import Topsection from "../../components/ui/topsection";
import StatCard from "../../components/startcard";
import Button from "../../components/ui/button";
import SEO from "../../components/ui/seo";

const Users = () => {
  const [showWarning, setShowWarning] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const stats = [
    {
      title: "admins",
      value: "2",
      description: "admins of the company",
      color: "indigo",
    },
    {
      title: "Managers",
      value: "3",
      description: "managers of the company",
      color: "green",
    },
    {
      title: "verifiers",
      value: "5",
      description: "verifiers of the company",
      color: "orange",
    },
    {
      title: "clients",
      value: "50",
      description: "active clients of the company",
      color: "blue",
    },
  ];

  const handleDeleteClick = (busId) => {
    setUserToDelete(busId);
    setShowWarning(true);
  };

  const handleConfirmDelete = () => {
    //  make an API call to delete the user
    console.log("Deleting user:", user);
    setShowWarning(false);
    setUserToDelete(null);
  };

  const handleCancelDelete = () => {
    setShowWarning(false);
    setUserToDelete(null);
  };
  return (
    <div className="p-6 bg-white ml-0 md:ml-64 max-h-screen ">
      <SEO
        title="User Management dashboard"
        description="User Management dashboard"
        content="User Management dashboard"
      />
      {showWarning && (
        <Warningmodel
          onCancel={handleCancelDelete}
          onConfirm={handleConfirmDelete}
        />
      )}

      <div>
        {" "}
        <Topsection />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            description={stat.description}
            color={stat.color}
          />
        ))}
      </div>
      <div className="bg-gray-200 rounded-lg p-4">
        <div className="flex justify-between items-center mb-4 ">
          <div>
            <h2 className="text-2xl font-bold">Users List</h2>
          </div>

          <div className="flex items-center gap-3">
            <Button className="flex items-center px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-full text-sm font-medium transition-colors whitespace-nowrap">
              Add <span className="ml-1 text-xl leading-none">＋</span>
            </Button>
            <Button className="border px-4 py-2 rounded-full text-sm font-medium border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors whitespace-nowrap">
              All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
