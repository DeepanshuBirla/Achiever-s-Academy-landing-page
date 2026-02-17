const ServiceCard = ({ icon, title, desc }) => {
  return (
    <div className="p-8 shadow-lg rounded-xl text-center hover:shadow-2xl transition">
      <div className="text-5xl">{icon}</div>
      <h3 className="text-xl font-bold mt-6">{title}</h3>
      <p className="text-gray-600 mt-4">{desc}</p>
    </div>
  );
};

export default ServiceCard;
