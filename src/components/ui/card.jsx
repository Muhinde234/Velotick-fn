const Card = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-[#E7E7E7] p-8 rounded-lg">
      <div className="flex gap-5 ">
        <Icon size={32} className="text-blue-600" />
        <p className="font-bold text-xl mb-5">{title}</p>
      </div>
      <div>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};

export default Card;
