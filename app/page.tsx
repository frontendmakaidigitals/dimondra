import HeroSection from "./(homepage)/HeroSection";
import About from "./(homepage)/About";
import Service from "./(homepage)/Service";
import Choose from "./(homepage)/Choose";
import HomeForm from "./(homepage)/HomeForm";
import { ChartPieDonutText } from "./(homepage)/PieChart";
import HRCertification from "./(homepage)/HRCertification";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <About />
      <Service />
      <Choose />
      <HRCertification />
      <HomeForm />
    </main>
  );
}
