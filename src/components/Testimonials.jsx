const Testimonials = () => {
  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        <div className="p-8 shadow-lg rounded-xl text-center">
          <img src="https://i.pravatar.cc/100?img=1" className="w-20 h-20 rounded-full mx-auto mb-4" />
          <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
          <p className="mt-4 text-gray-600">
            Amazing platform! I improved my skills and got a job.
          </p>
          <h4 className="mt-4 font-bold">Rahul Sharma</h4>
        </div>

        <div className="p-8 shadow-lg rounded-xl text-center">
          <img src="https://i.pravatar.cc/100?img=2" className="w-20 h-20 rounded-full mx-auto mb-4" />
          <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
          <p className="mt-4 text-gray-600">
            The courses are structured and beginner friendly.
          </p>
          <h4 className="mt-4 font-bold">Priya Verma</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
