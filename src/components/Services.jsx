import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    { icon: "💻", title: "Web Development", desc: "Build modern websites using React & latest tech." },
    { icon: "📱", title: "App Development", desc: "Create powerful mobile apps for Android & iOS." },
    { icon: "🎨", title: "UI/UX Design", desc: "Design beautiful and user-friendly interfaces." },
  ];

  return (
      <section id="services" className="py-20 px-6">

      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
