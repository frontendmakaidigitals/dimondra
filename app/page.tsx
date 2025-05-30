import HeroSection from "./(homepage)/HeroSection";
import About from "./(homepage)/About";
import Service from "./(homepage)/Service";
import Choose from "./(homepage)/Choose";
import HomeForm from "./(homepage)/HomeForm";
import Footer from "./Footer/Footer";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <About />
      <Service />
      <Choose />
      <HomeForm />
      <Footer />
    </main>
  );
}
