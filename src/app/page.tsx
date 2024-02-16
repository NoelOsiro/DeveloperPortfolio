import Image from "next/image";
import About from "@/components/About/About";
import Achievement from "../components/Achievement/Achievement";
import Landing from "../components/Landing/Landing";
import Education from "../components/Education/Education";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Services from "../components/Services/Services";
import Skills from "../components/Skills/Skills";
import Testimonials from "../components/Testimonials/Testimonials";
import Contacts from "../components/Contacts/Contacts";
import Blog from "../components/Blog/Blog";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Landing />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Achievement />
      <Services />
      <Testimonials />
      <Blog />
      <Contacts />
    </main>
  );
}
