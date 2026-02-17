const CourseCard = ({ title, price }) => {
  return (
    <div className="p-8 bg-white shadow-lg rounded-xl text-center hover:scale-105 transition">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-3xl font-bold text-indigo-600 my-6">{price}</p>

      <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
        Enroll Now
      </button>
    </div>
  );
};

export default CourseCard;
