import HeroSection from "./(homepage)/HeroSection";
import About from "./(homepage)/About";
import Service from "./(homepage)/Service";
import Choose from "./(homepage)/Choose";
import HomeForm from "./(homepage)/HomeForm";
import { ChartPieDonutText } from "./(homepage)/PieChart";
import ServiceRevamp from "./(homepage)/serviceRevamp";
import Blogs from "./(homepage)/Blogs";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <About />
      <ServiceRevamp />
      <Choose />
      <ChartPieDonutText />

      <Blogs />
      <HomeForm />
    </main>
  );
}
