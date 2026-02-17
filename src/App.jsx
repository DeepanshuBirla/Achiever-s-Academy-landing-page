import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Courses from "./components/Courses";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Hero />
        <Services />
        <Courses />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
