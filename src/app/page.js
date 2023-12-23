import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Fqa from "@/components/FQA";
import AppInfo from "@/components/AppInfo";
import AppInfo2 from "@/components/AppInfo2";
import ProjectsSection from "@/components/ProjectsSection";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Brands />
      {/* <AppInfo /> */}
      <ProjectsSection/>
      <Fqa />
      <ContactForm/>
      {/* <AppInfo2 /> */}
    </main>
  );
}
