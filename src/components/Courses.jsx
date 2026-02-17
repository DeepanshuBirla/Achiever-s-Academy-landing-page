import React, { useState } from "react";

const Courses = () => {
  const [activeCourse, setActiveCourse] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleEnroll = (courseName) => {
    setActiveCourse(courseName);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Our Courses</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

        {/* Course 1 */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Web Development</h3>
          <p className="text-blue-600 font-bold mb-4">₹4,999</p>
          <button
            onClick={() => handleEnroll("Web Development")}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Enroll Now
          </button>
        </div>

        {/* Course 2 */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Full Stack Development</h3>
          <p className="text-blue-600 font-bold mb-4">₹8,999</p>
          <button
            onClick={() => handleEnroll("Full Stack Development")}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Enroll Now
          </button>
        </div>

        {/* Course 3 */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Data Science</h3>
          <p className="text-blue-600 font-bold mb-4">₹9,999</p>
          <button
            onClick={() => handleEnroll("Data Science")}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Enroll Now
          </button>
        </div>
      </div>

      {/* FORM SECTION */}
      {activeCourse && (
        <div className="mt-10 bg-white p-6 rounded shadow max-w-md mx-auto">
          <h3 className="text-xl font-semibold mb-4">
            Enroll in {activeCourse}
          </h3>

          {submitted ? (
            <p className="text-green-600 font-semibold">
              Thank You for enrolling in {activeCourse} 🎉
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full p-2 border rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full p-2 border rounded"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full p-2 border rounded"
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      )}
    </section>
  );
};

export default Courses;
