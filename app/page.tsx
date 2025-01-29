
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/About";
import Skills from "@/components/Skills"
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { Navbar } from "@/components/Navbar";
import { navItems } from "@/data";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative dark:bg-black-100 bg-white flex justify-center items-center flex-col mx-auto overflow-clip px-5 md:px-10">
      <div className="max-w-7xl w-full">
        <Navbar navItems={navItems} />
        <Hero />
        <Grid />
        <Skills />
        <Experience />
        <RecentProjects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
