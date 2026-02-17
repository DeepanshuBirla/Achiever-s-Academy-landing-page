const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24 text-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Upgrade Your Skills <br /> With Modern Learning
      </h1>

      <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto">
        Join thousands of students learning web development, design and tech skills.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Get Started
        </button>

        <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;
