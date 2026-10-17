import AboutSection from "@/components/AboutSection";
import Contact from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projeccts";
import Skills from "@/components/SkillSection";


export default function Home() {
  return (
    <>
    <Hero></Hero>
    <AboutSection></AboutSection>
    <Skills></Skills>
    <Projects></Projects>
    <Contact></Contact>
    <Footer></Footer>
    </>
  );
}
