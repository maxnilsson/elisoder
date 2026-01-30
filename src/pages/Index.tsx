import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import News from "@/components/News"; // <-- 1. Vi importerar den här
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <News /> {/* <-- 2. Här lägger vi in sektionen! */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;