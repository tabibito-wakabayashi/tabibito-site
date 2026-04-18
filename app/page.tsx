import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Service from './components/Service';
import Works from './components/Works';
import Why from './components/Why';
import Company from './components/Company';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Service />
      <Why />
      <Works />
      <Company />
      <Contact />
      <Footer />
    </main>
  );
}
