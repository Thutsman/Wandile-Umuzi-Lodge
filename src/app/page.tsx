import Navigation from '@/components/Navigation';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Accommodation from '@/sections/Accommodation';
import FarmTours from '@/sections/FarmTours';
import Gallery from '@/sections/Gallery';
import Contact from '@/sections/Contact';
import Booking from '@/sections/Booking';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <Accommodation />
        <FarmTours />
        <Gallery />
        <Contact />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
