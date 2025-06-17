import HeroSection from "./(homepage)/HeroSection";
import About from "./(homepage)/About";
import Choose from "./(homepage)/Choose";
import HomeForm from "./(homepage)/HomeForm";

import ServiceRevamp from "./(homepage)/serviceRevamp";
import Blogs from "./(homepage)/Blogs";
import Sector from "./(homepage)/Sector";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <About />
      <ServiceRevamp />
      <Choose />

      <Sector />
      <Blogs />
      <HomeForm />
    </main>
  );
}
